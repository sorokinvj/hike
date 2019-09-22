import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../shared/Logo'

const Styled = styled.div`
    height: 46rem;
    background: linear-gradient(180deg, #000000 23%, #002B5D 100%);
    padding-top: 23rem;
    @media (min-width: 416px) {
      padding: 0;
      background: url(/static/about_back.svg),linear-gradient(180deg,#000000 23%,#002B5D 100%);
      background-size: contain;
      background-repeat: no-repeat;
      background-position-y: 50%;    
    }
    @media (min-width: 769px) {
      background-size: cover;
    }
    text-align: center;
    p {
        color: white;
        font-family: 'Nunito Sans';
        font-size: 1.6rem;
    }
    div {
        width: 20rem;
    }
`

const Hero = ({ phone }) => {
  return (
    <Styled>
      {phone && <Logo center white />}
    </Styled>
  )
}

Hero.propTypes = {

}

export default Hero
