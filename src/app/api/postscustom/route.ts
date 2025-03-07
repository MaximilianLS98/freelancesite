import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from '@payload-config'


interface PostRequest extends NextRequest {}

interface PostResponse {
    message: string;
}

export async function POST(req: PostRequest): Promise<NextResponse<PostResponse>> {
    // check if the headers Authorization is set and has a api key
    const authorization = req.headers.get('authorization');
    if (!authorization || authorization !== 'c85d4f59-ca9c-4ada-9652-a1d0c050b254') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }
    // This endpoint should take in a post title and body and publish it to payload CMS as a new post
    // It should return a message saying "Post published!" or error message if something went wrong
    const { title, content } = await req.json();
    if (!title || !content) {
        return NextResponse.json({ message: "Please provide a title and body for the post" }, { status: 400 });
    }

    // Publish the post
    const payload = await getPayload({config: configPromise});
    const post = payload.create({
        collection: "posts",
        data: {
            title,
            content,
            _status: "published",
        },
    });
    if (!post) {
        return NextResponse.json({ message: "Failed to publish post" }, { status: 500 });
    }

    return NextResponse.json({ message: "Post published!" });
}