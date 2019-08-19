import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H2 from '../style/H2'
import SquaredTitle from '../style/SquaredTitle'


const Styled = styled.div`

    background: ${props => props.back};
    background-size: cover;
    color: white;
    text-align: center;
    padding: 32% 0;
    @media (min-width: 416px) {
      padding: 20rem 0;
    }
    display: flex;
    flex-direction: column;

    .body {
        margin-top: 1.5rem;
    }

`

const Lifeonthemove = ({ phone }) => {
  const back = phone !== null 
    ? "url('/static/lifeonthemove_back.png')"
    : "url('/static/lifeonthemove_back_desktop.png')"
  return (

    <Styled back={back}>
      <SquaredTitle>
        <H2>Life on the move</H2>
        <p className="body">
          Get the most out of Europe by covering huge distances at night while sleeping in our super comfortable bus
        </p>
      </SquaredTitle>
    </Styled>
  )
}

Lifeonthemove.propTypes = {
  phone: PropTypes.string
}

Lifeonthemove.defaultProps = {
  phone: null
}

export default Lifeonthemove
