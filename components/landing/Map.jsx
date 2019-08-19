import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
`

const Map = ({ map }) => {
  return (
    <Styled>
      <img src={map} alt="Hike tour map" />
    </Styled>
  )
}

Map.propTypes = {
  map: PropTypes.string.isRequired
}

export default Map
