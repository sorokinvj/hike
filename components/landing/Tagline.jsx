import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import BookButton from './BookButton'

const Section = styled.div`
    padding: 10rem 0;
`

const Tagline = ({ h1, buttonText }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{offset: 3, size: 6}}>
          <Section>
            <H1>
              {h1}
            </H1>
            <BookButton>
              {buttonText}
            </BookButton>
          </Section>
        </Col>
      </Row>
    </Container>
  )
}

Tagline.propTypes = {
  h1: PropTypes.string, 
  buttonText: PropTypes.string
}

Tagline.defaultProps = {
  h1: '',
  buttonText: ''
}


export default Tagline
