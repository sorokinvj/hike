import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Button from '../style/Button'
import Day from './Day'

// replace this with Priscmic call
import route from './route.js'

const Styled = styled.div`

    padding: 10rem 0;

    button {
        margin: 6rem 0 0 0;
    }
`
const Schedule = () => {
  return (
    <Styled>
      <Container>
        <Row>
          <H1>Catch all the top highlights and enjoy hidden gems off the beaten track</H1>
          {route.map(day => <Day day={day} key={day.headline}/>)}
        </Row>
        <Button>
            Book now
        </Button>
      </Container>
    </Styled>
  )
}

// Schedule.propTypes = {

// }

export default Schedule
