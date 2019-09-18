import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import Button from '../style/Button'
import H1 from '../style/H1'

const Styled = styled.div`
    a {
        margin: 0 auto 6rem;
    }
`

const Contact = ({ title, buttonText }) => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col xs={12} md={{offset: 2, size: 8}} lg={{size: 8, offset: 2}}>
            <H1>
              {title}
            </H1>
          </Col>
        </Row>
        <Row>
          <Link href="/lisbon-berlin">
            <a>
              <Button>
                {buttonText}
              </Button>
            </a>
          </Link>
        </Row>
      </Container>
    </Styled>
  )
}

export default Contact
