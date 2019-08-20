import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import BookButton from './BookButton'
import Day from './Day'

const Styled = styled.div`

    padding: 10rem 0;
    @media (max-width: 415px) {
      h1 {
        width: 90%;
      }
    }

`
const Schedule = ({ title, route, phone, buttonText}) => {
  return (
    <Styled>
      <Container theme={phone !== null && {'$grid-gutter-width': '0px'}}>
        <Row>
          <Col xs={12} md={{offset: 3, size: 6}}>
            <H1>{title}</H1>
          </Col>
        </Row>
        <Row>
          {route.map(day => <Day day={day} key={day.highlight_title[0].text}/>)}
        </Row>
      </Container>
      <Container>
        <BookButton>
          {buttonText}
        </BookButton>
      </Container>
    </Styled>
  )
}

Schedule.propTypes = {
  title: PropTypes.string,
  phone: PropTypes.string,
  buttonText: PropTypes.string,
  route: PropTypes.arrayOf(PropTypes.shape({
    highlight_title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    highlight_img: PropTypes.shape({
      url: PropTypes.string
    }),
    highlight_description: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
  }))
}

export default Schedule
