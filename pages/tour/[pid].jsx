import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Landing from '../../components/landing'

import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

// const MainPage = styled.div`
// `

class Index extends React.Component {
//   static propTypes = {
//   }

  //   static defaultProps = {
  //   }


  static async getInitialProps(ctx) {
    const { query: { pid } } = ctx
    const response = await client.query(
      Prismic.Predicates.at('my.landing.uid', pid),
    )

    return { response }
  }


  //   componentDidMount() {

  //   }

  //   componentDidUpdate(prevProps) {

  //   }

  render() {
    console.log(this.props)
    return (
      <Landing id="general" />
    )
  }
}

export default Index
