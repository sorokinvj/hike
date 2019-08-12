import React from 'react'
// import PropTypes from 'prop-types'
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
`

const HostelOnWheels = () => {
  return (
    <>
        <Container>
          <Row>
            <Col xs="12">
              <Styled>
                <H1>
                    Experience Europe with the first hostel on wheels
                </H1>
                <img src="/static/bus_scheme.png" alt="Hike bus" />
                <p className="body">
                    We have everything you exprect in normal hostel, except that all facilities are orginized in slightly different way: there are beds in the bus, kitchen, toilet and even a bar!, but shower  –  and there is some explanation how are we gonna partner with Homes place or Nomad around showers
                </p>
                <H1>
                    Take a virtual tour of Hike bus
                </H1>
              </Styled>
            </Col>
          </Row>
        </Container>
        <ReactPlayer 
          url='https://www.facebook.com/AbsoluteTouring/videos/924974071042786/' 
          width='100%'
          height='100%'
          muted
          controls
        />
    </>
  )
}

HostelOnWheels.propTypes = {

}

export default HostelOnWheels
