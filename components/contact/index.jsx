import React from 'react'
import styled from 'styled-components'

import Navbar from '../shared/navbar'
import Hero from './Hero'
import Story from './Story'

const AboutPage = styled.div`
`

const About = () => {
  return (
    <AboutPage>
      <Navbar />
      <Hero />
      <Story />
    </AboutPage>
  )
}

export default About