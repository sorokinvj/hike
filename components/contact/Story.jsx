import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Body from '../style/Body'

const Styled = styled.div`
  background: #F2F2F2;
  padding: 10rem 0;

  h1 {
    text-align: left;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    h1 {
      margin: 0 0 4rem 0;
      @media (min-width: 416px) {
        text-align: left;
      }
    }
  }
  img {
    margin-top: 3rem;
    width: 100%;
  }

`

const Story = () => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col xs={12} md={{size: 5}}>
            <div className="text-wrap">
              <H1>
                We are living in Lisbon, Portugal
              </H1>
              <Body>
                Come visit us in NOW coworking space:
                <br />
                <br />
                Rua do Grilo 135,<br />
                1950-144<br />
                Lisbon
                <br />
                <br />
                or drop a message to:
                <br />
                <br />
                <a href="hello@hiketrips.com">hello@hiketrips.com</a>
              </Body>
            </div>
          </Col>
          <Col xs={12} md={{size: 6, offset: 1}}>
            <img src='/static/contact.jpg'  />
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

Story.propTypes = {

}

export default Story
