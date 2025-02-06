import type { Metadata } from 'next/types'

import React, { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import PreTextDebug from '@/components/customComponents/PreTextDebug'
import Image from 'next/image'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  return (
    <div className="pt-24 pb-24 bg-gray-100 dark:bg-gray-900">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Prosjekter</h1>
        </div>
      </div>

      <div className="container mb-8 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.docs.map((project: any) => (
            <Card
              key={project.id}
              className="shadow-custom bg-brutal-green-500 border-2 border-black"
            >
              <div className='min-w-full'>
                <Image
                  src={
                    project.meta?.image
                      ? project.meta.image.sizes.small.url
                      : '/placeholder.jpg?height=300&width=400'
                  }
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover'
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Liten beskrivelse her</CardDescription>
              </CardContent>
              <CardFooter>
                {/* A link to the project at /projects/{id} */}
                <Link
                  href={`/projects/${project.id}`}
                  className="text-black text-sm items-center shadow-custom shadow-lila-600 font-semibold inline-flex px-2 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-12 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
                >
                  Les mer
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="my-4">
          <PreTextDebug payload={projects} />
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
