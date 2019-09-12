import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H2 from '../style/H2'
import SquaredTitle from '../style/SquaredTitle'


const Styled = styled.div`

    background: ${props => props.back};
    background-size: cover;
    background-position: 40% 0%;
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
      margin-top: 3rem;
      color: white;
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
          We are passionate about the nomadic way of life: constantly changing locations, meeting people and experiencing the best this world has to offer. For nomads “Change is home”. Sitting still is an opportunity missed. Not many people can stick to this lifestyle in the long term. When you experience a Hike trip, you will get these same experiences in a matter of days. You will see if this fast-paced life is for you. Our mission is to bring adventure seekers together. Our ambition is to create a community of individuals, who support each other to thrive in an ever-changing world.
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
