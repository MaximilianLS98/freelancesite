import React, { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'
import PageClient from './page.client'
import Image from 'next/image'
import PreTextDebug from '@/components/customComponents/PreTextDebug'
import { Media } from '@/components/Media'

// Image imports 
import Placeholder from '../../../../../public/placeholder.jpg'


type Args = {
  params: Promise<{
    id?: string
  }>
}

export default async function Project({ params: paramsPromise }: Args) {
  const { id = '' } = await paramsPromise
  const url = '/projects/' + id
  const project = await queryProjectById({ id })

  const metaImage = project.meta?.image
  
  return (
    <>
      <div className="relative -mt-[10.4rem] flex items-end">
        <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
          <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
            <div className="uppercase text-sm mb-6">
            </div>

            <div className="">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{project.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">Author</p>
                    Maximilian
                  </div>
              </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Date Published</p>
                  'Some time'
                </div>
            </div>
          </div>
        </div>
        <div className="min-h-[80vh] select-none">
          {metaImage && typeof metaImage !== 'string' && (
            <Media fill imgClassName="-z-10 object-cover" resource={metaImage} />
          )}
          {!metaImage && (
            <Image src={Placeholder} alt="Placeholder" layout="fill" objectFit="cover" />
            )}
          <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
      <div className="py-16">
        <PageClient />
        <div className="flex flex-col items-center gap-4 pt-8">
          <div className="container lg:mx-0 lg:grid lg:grid-cols-[1fr_48rem_1fr] grid-rows-[1fr]">
            <RichText
              className="lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[1fr]"
              content={project.richContent || {}}
              enableGutter={false}
            />
          </div>
        </div>
        <div className='m-4'>
        <PreTextDebug data={project} />
        </div>
      </div>
    </>
  )
}

const queryProjectById = cache(async ({ id }: { id: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      id: {
        equals: id,
      },
    },
  })
  

  return result.docs?.[0] || null
})
