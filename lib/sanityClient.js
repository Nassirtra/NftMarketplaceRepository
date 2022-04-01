import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'l11hybcx',
    dataset: 'production',
    apiVersion: '2022-03-17',
    token: 'skuU0qo5JGashLHsPuFZeGLyPQo61PXCPgo3ZB08LdEqWmYzSXJzou2QoX0WIufX40HEoFVSwzicvLFBLwgyoRwYqNivgOgFkM0unu0y4hOlOu4tjB2F0frcTgNTGsFK430JhjEDxWRsZys40SiSZBJANB9YEHGqAZGcZDeMeNlz5kpUdFmA',
    useCdn: false,
})