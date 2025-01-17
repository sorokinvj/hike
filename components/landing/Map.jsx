import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H1 from '../style/H1'
import { Container, Row, Col } from '@bootstrap-styled/v4'

const Styled = styled.div`
  img {
    width: 100%;
  }
`

const Map = ({ mapUrl, phone  }) => {
  return (
    <Styled>
      <Container theme={phone !== null ? {'$grid-gutter-width': '0px'} : {} }>
        <img src={mapUrl} alt="Hike tour map" />
      </Container>
    </Styled>
  )
}

Map.propTypes = {
  mapUrl: PropTypes.string.isRequired,
  phone: PropTypes.string
}

export default Map
