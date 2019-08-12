import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
`

const Map = () => {
  return (
    <Styled>
      <img src="/static/map.png" alt="Hike tour map" />
    </Styled>
  )
}

Map.propTypes = {

}

export default Map
