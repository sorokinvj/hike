import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://hikelanding.cdn.prismic.io/api/v2'

export const client = Prismic.client(apiEndpoint)
