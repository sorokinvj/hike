// core libs
import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import ExperienceFacts from '../components/landing/ExperienceFacts'
import HostelOnWheels from '../components/landing/HostelOnWheels'
import Lifeonthemove from '../components/landing/Lifeonthemove'
import Map from '../components/landing/Map'
import Schedule from '../components/landing/Schedule'
import Tagline from '../components/landing/Tagline'
import Tribe from '../components/landing/Tribe'
import VideoHero from '../components/landing/VideoHero'

const MainPage = styled.div`
`


class Index extends React.Component {
//   static propTypes = {
//   }

  //   static defaultProps = {
  //   }


  //   static async getInitialProps(ctx) {
  //     // получаем все необходимое для рендеринга компонента от сервера

  //     return { };
  //   }


  //   componentDidMount() {

  //   }

  //   componentDidUpdate(prevProps) {

  //   }

  render() {
    return (
      <MainPage>
        <VideoHero />
        <Tagline />
        <Map />
        <ExperienceFacts />
        <Lifeonthemove />
        <Schedule />
        <HostelOnWheels />
        <Tribe />
      </MainPage>
    )
  }
}



export default Index
