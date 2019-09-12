import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import H1 from '../style/H1'
import SquaredTitle from '../style/SquaredTitle'

const Hero = styled.div`
    margin: 0 auto;
    width: 100%;
    height: calc(100vw*1.777777);
    background: ${props => ('url(' + props.back +')')};
    background-size: cover;
    margin-top: 7rem;
    background-position: 50% 50%;
    padding-top: calc(100vh*0.31);
    @media (min-width:416px) {
      padding-top: 20rem;
      height: 60rem;
      background-position: 50% 100%;
      padding-top: 13rem;
    }

    h1 {
      margin: 0 auto;
      color: white;
      font-family: 'Nunito Sans', sans-serif;
      font-weight: 900;
      line-height: 1.5;
      letter-spacing: 1px;
      font-size: 2.5rem;
      @media (min-width:416px) {
        font-size: 4rem;
      }
    }
`

const PhotoHero = ({ photo, title }) => {
  return (
    <Hero back={photo}>
      <SquaredTitle>
        <H1>
          {title}
        </H1>
      </SquaredTitle>
    </Hero>
  )
}

PhotoHero.propTypes = {

}

export default PhotoHero

