import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 0;
    .facts {
      display: flex;
      flex-direction: column;
      @media (min-width: 416px) {
        flex-direction: row;
      }
      .fact {
          text-align: center;
          width: 20rem;
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
            @media (min-width: 416px) {
              height: 7rem;
            }
          }
      }
    }
`
const ExperienceFacts = ({ title, facts }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <Styled>
            <H1>{title}</H1>
            <div className="facts">
              {facts.map(fact => (
                <div className="fact" key={fact.fact_name[0].text}>
                  <img src={fact.fact_icon.url} alt="" />
                  <p>{fact.fact_name[0].text}</p>
                </div>
              ))}
            </div>
          </Styled>
        </Col>
      </Row>
    </Container>        
  )
}

ExperienceFacts.propTypes = {
  title: PropTypes.string,
  facts: PropTypes.arrayOf(PropTypes.shape({
    fact_name: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
    })),
    fact_icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
}

ExperienceFacts.defaultProps = {
  title: '',
  facts: []
}

export default ExperienceFacts
