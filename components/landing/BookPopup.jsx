import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseButton from './CloseButton'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import H2 from '../style/H2'
import EmailCollector from './EmailCollector'

const Styled = styled.div`
    padding: 10rem 0;
    text-align: center;

    h1 {
        margin-bottom: 4rem;
    }
    h2 {
        color: ${props => props.theme['$darkblue']};
        font-size: 3rem;
        margin-bottom: 5rem;
    }
    .body {
        margin-bottom: 4rem;
    }
`

const BookPopup = ({ close }) => {
  return (
    <Container>
      <CloseButton close={close} />
      <Row>
        <Col xs={12}>
          <Styled>
            <H1>
                Reserve your spot on Hike trip next Spring
            </H1>
            <p className="body">
            We currently design the trip and very soon we will launch a booking system, so you have a chance to reserve a place in our super duper bus only for 100 euro.
            </p>
            <H2>
              Leave your email and we notify when we will ready to sell normal ticket            
            </H2>
            <EmailCollector />
          </Styled>
        </Col>
      </Row>
    </Container>
  )
}

BookPopup.propTypes = {
  close: PropTypes.func.isRequired
}

export default BookPopup
