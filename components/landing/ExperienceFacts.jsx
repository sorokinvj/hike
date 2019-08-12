import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0;
    .fact {
        text-align: center;

        &:not(:last-child) {
            margin-bottom: 4rem;
        }

        p  {
            font-family: Helvetica;
            font-size: 2rem;
            color: #4F4F4F;
            width: 70%;
            margin: 0 auto;
        }

        img {
            margin-bottom: 1.5rem;
        }
    }
`
const ExperienceFacts = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <Styled>
            <H1>A one-of-a-kind experience</H1>
            <div className="fact">
              <img src="/static/facts_star.svg" alt="" />
              <p>5 Europe booming cities</p>
            </div>
            <div className="fact">
              <img src="/static/facts_gem.svg" alt="" />
              <p>4 secret places</p>
            </div>
            <div className="fact">
              <img src="/static/facts_calendar.svg" alt="" />
              <p>days</p>
            </div>
            <div className="fact">
              <img src="/static/3500.svg" alt="" />
              <p>km</p>
            </div>
            <div className="fact">
              <img src="/static/tribe.svg" alt="" />
              <p>your tribe</p>
            </div>
          </Styled>
        </Col>
      </Row>
    </Container>
            
  )
}

export default ExperienceFacts
