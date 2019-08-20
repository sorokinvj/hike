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

    return { response }
  }

  render() {
    const  { response, phone } = this.props
    return (
      <Landing 
        id="general" 
        page={response.results[0]}
        phone={phone}
      />
    )
  }
}

export default Index
