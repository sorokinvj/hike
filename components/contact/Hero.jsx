import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
    height: 50rem;
    background: url('/static/now.jpg');
    background-size: cover;
    text-align: center;
    background-position-y: 34%;
    background-position-x: 59%;
    @media (min-width: 769px) {
      background-position-x: 0%;
    }
`

const Hero = () => {
  return (
    <Styled />
  )
}

Hero.propTypes = {

}

export default Hero
