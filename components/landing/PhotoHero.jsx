import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import H1 from '../style/H1'
import SquaredTitle from '../style/SquaredTitle'
import Logo from '../navbar/Logo'

const Hero = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 70rem;
    background: ${props => ('url(' + props.back +')')};
    background-size: cover;
    padding-top: 15rem;
    @media (min-width:416px) {
      padding-top: 20rem;
    }

    h1 {
      margin: 0 auto;
      color: white;
      font-family: Fira Sans;
      font-weight: 500;
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

