import React from 'react'
import Landing from '../../components/landing'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

class Index extends React.Component {


  static async getInitialProps(ctx) {
    const { query: { pid } } = ctx
    const response = await client.query(
      Prismic.Predicates.at('my.landing.uid', pid),
    )

    return { response, pid }
  }

  render() {
    const  { response, phone, pid } = this.props
    return (
      <Landing 
        page={response.results[0]}
        phone={phone}
        uid={pid}
      />
    )
  }
}

export default Index
