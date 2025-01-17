import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Day from './Day'

const Styled = styled.div`

  padding: 10rem 0 0 0;
  @media (max-width: 415px) {
    h1 {
      width: 90%;
    }
  }

  /* to make photo without borders */
  @media (max-width: 415px) {
    .container {
      padding: 0;
      .row {
        margin: 0;
        .col-12 {
          padding: 0;
        }
      }
    }
  }

`
const Schedule = ({ title, route }) => {
  return (
    <Styled id="route">
      <Container>
        <Row>
          <Col xs={12} md={{offset: 3, size: 6}}>
            <H1>{title}</H1>
          </Col>
        </Row>
        <Row>
          {route.map(day => <Day day={day} key={day.highlight_title[0].text}/>)}
        </Row>
      </Container>
    </Styled>
  )
}

Schedule.propTypes = {
  title: PropTypes.string,
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
