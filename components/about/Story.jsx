import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Body from '../style/Body'

const Styled = styled.div`
  background: #F2F2F2;
  margin-top: 4rem;
  padding: 10rem 0;

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

const Story = ({img, title, description, phone}) => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col xs={12} md={{size: 4, order: 7}}>
            <div className="text-wrap">
              <H1>
                {title}
              </H1>
              <Body>
                {description}
              </Body>
            </div>
          </Col>
          <Col xs={12} md={{size: 7, offset: 1}}>
            <img src={phone ? img.mob.url : img.url}  />
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

Story.propTypes = {

}

export default Story
