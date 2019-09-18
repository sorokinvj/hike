import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import { Container, Row } from '@bootstrap-styled/v4'

// components
import H2 from '../style/H2'
import SquaredTitle from '../style/SquaredTitle'
import Button from '../style/Button'


const Styled = styled.div`

    background: ${props => props.back};
    background-size: cover;
    background-position: 40% 0%;
    color: white;
    text-align: center;
    padding: 32% 6% 6rem;
    margin-top: 10rem;
    @media (min-width: 416px) {
      padding: 13rem 27% 6rem;
    }
    display: flex;
    flex-direction: column;

    .body {
      margin-top: 3rem;
      color: white;
    }

    a {
      margin: 6rem auto 0;
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
      
      <Container>
        <Row>
          <Link href="/lisbon-berlin">
            <a>
              <Button>
                Our vision
              </Button>
            </a>
          </Link>
        </Row>
      </Container>
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
