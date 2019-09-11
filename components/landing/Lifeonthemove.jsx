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
    margin-top: 10rem;
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

    <Styled back={back} id="move">
      <SquaredTitle>
        <H2>Life on the move</H2>
        <p className="body">
          We are passionate about the nomadic way of living, a constant change of locations, people and experiences. For nomads “Change is home”. Not many people can stick to this lifestyle in the long term though with Hike trips you will feel it in a matter of days and then decide if this is what you want. Our mission is to bring adventure seekers together. Our ambition is to create a community of individuals helping each other to thrive in an ever-changing world. 
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
