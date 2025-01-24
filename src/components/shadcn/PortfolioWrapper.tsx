import React, { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import Portfolio from './Portfolio'

export default async function PortfolioWrapper() {
  const projects = await queryFeaturedProjects()

  return (
    <Portfolio projectsPayload={projects} />
  )
}

const queryFeaturedProjects = cache(async () => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  // const result = await payload.find({
  //   collection: 'projects',
  //   draft,
  //   limit: 3,
  //   overrideAccess: draft,
  //   where: {
  //     featured: {
  //       equals: true,
  //     },
  //   },
  // })

  const result = {
    docs: null
  }

  console.log(result.docs);
  

  return result.docs || null
})
