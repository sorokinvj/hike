import React from 'react'
import styled from 'styled-components'

import Navbar from '../main/navbar/'
import Hero from './Hero'
import Tagline from '../shared/Tagline'
import Story from './Story'
import Team from './Team'
import Partners from './Partners'

const AboutPage = styled.div`
`

const About = ({ page, }) => {
  const { vision_title, 
    vision_description, 
    story_img, 
    story_title, 
    story_description, 
    teams, 
    team_title, 
    team_description, 
    team_members,
    partners_title,
    partners,
  } = page
  return (
    <AboutPage>
      <Navbar noLogo transparent />
      <Hero />
      <Tagline 
        title={vision_title[0].text}
        description={vision_description[0].text}
      />
      <Story 
        img={story_img.mob.url}
        title={story_title[0].text}
        description={story_description[0].text}
      />
      <Team 
        title={team_title[0].text}
        description={team_description[0] && team_description[0].text}
        items={team_members}
      />
      <Partners 
        title={partners_title[0].text}
        partners={partners}
      />
    </AboutPage>
  )
}

export default About