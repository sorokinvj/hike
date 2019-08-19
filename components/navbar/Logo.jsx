import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LogoStyled = styled.div`
    width: 12rem;
    img {
        width: 100%;
    }
    z-index: 9999;
    margin: ${props => props.center ? '0 auto' : '0'};
`

const Logo = ({ center }) => {
  return (
    <LogoStyled center={center}>
      <img src="/static/logo_white.svg" />
    </LogoStyled>
  )
}

Logo.propTypes = {
  center: PropTypes.bool
}

Logo.defaultProps = {
  center: false
}

export default Logo
