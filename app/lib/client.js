import sanityClient from '@sanity/client'
//import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
	projectId: '22ecbgg1',
	dataset: 'production',
	apiVersion: '2024-06-15',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

