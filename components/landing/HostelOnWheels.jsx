import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'

const Styled = styled.div`
  text-align: center;
  img {
      margin-bottom: 5rem;
  }
  p {
      margin-bottom: 6rem;
  }
  h1 {
    margin-top: 10rem;
  }

`
const PlayerContainer = styled.div`
`

const HostelOnWheels = ({ buttonText }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={{size: 6, offset: 3}}>
            <Styled>
              <H1>
                Experience Europe with the first hostel on wheels. Travel in a small group of 16 people
              </H1>
              <img src="/static/small_bus.png" alt="Hike bus" />
              <p className="body">
                The first organized tour of its kind, where you travel while never changing your accommodation. Our luxury hostel bus is equipped with comfortable beds, kitchen, two lounges, and even a bar. If getting the most out of your trip and travelling with likeminded people is important to you, sign up today!
              </p>
              {/* <H1 id="virtual_tour">
                  Take a virtual tour of Hike bus
              </H1> */}
            </Styled>
          </Col>
        </Row>
      </Container>
      {/* <PlayerContainer>
        <ReactPlayer 
          url='https://www.facebook.com/AbsoluteTouring/videos/924974071042786/' 
          width='100%'
          height='100%'
          muted
          controls
        />
      </PlayerContainer> */}
    </>
  )
}

HostelOnWheels.propTypes = {
  buttonText: PropTypes.string, 
}

export default HostelOnWheels
