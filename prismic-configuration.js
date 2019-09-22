import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://hikelanding.cdn.prismic.io/api/v2'

export const client = Prismic.client(apiEndpoint)

export const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'landing') {
    return `/tour/[${doc.uid}]`
  }
  // Backup for all other types
  return '/'
}
  