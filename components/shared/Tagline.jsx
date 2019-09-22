import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Body from '../style/Body'

const Section = styled.div`
    padding: 10rem 0 0 0;
    text-align: center;
    button {
      margin-top: 6rem;
    }
    p {
      margin-bottom: 6rem;
    }
    @media (max-width: 415px) {
      h1 {
        width: 80%;
      }
    }

`

const Tagline = ({ title, description }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{offset: 2, size: 8}} lg={{size: 8, offset: 2}}>
          <Section>
            <H1>
              {title}
            </H1>
            <Body>
              {description}
            </Body>
          </Section>
        </Col>
      </Row>
    </Container>
  )
}

Tagline.propTypes = {
  h1: PropTypes.string, 
  description: PropTypes.string
}

Tagline.defaultProps = {
  h1: '',
  description: ''
}


export default Tagline
