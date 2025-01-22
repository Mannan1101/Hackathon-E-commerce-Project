import { createClient } from 'next-sanity'
import sanityClient from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "5okz1gp2",
  dataset: "production",
  apiVersion: "2021-02-25",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
