import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../shared/Logo'

const Styled = styled.div`
    height: 46rem;
    background: linear-gradient(180deg, #000000 23%, #002B5D 100%);
    padding-top: 23rem;
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

const Hero = () => {
  return (
    <Styled>
      <Logo center white />
    </Styled>
  )
}

Hero.propTypes = {

}

export default Hero
