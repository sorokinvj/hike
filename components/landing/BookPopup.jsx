import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseButton from './CloseButton'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import EmailCollector from './EmailCollector'

const Styled = styled.div`
    padding: 10rem 0;
    text-align: center;

    h1 {
        margin-bottom: 4rem;
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
        <Col xs={12} md={{size: 8, offset: 2}} lg={{size: 6, offset:3}}>
          <Styled>
            <H1>
              Reserve your spot on Hike trip next Spring
            </H1>
            <p className="body">
              We are currently designing the trip details and logistics. Please leave your email and we notify when we will ready to sell normal ticket            
            </p>
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
