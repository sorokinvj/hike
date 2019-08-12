import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LogoStyled = styled.div`
    width: 12rem;
    img {
        width: 100%;
    }
    z-index: 9999;
`

const Logo = props => {
    return (
        <LogoStyled>
           <img src="/static/logo_white.svg" />
        </LogoStyled>
    )
}

Logo.propTypes = {

}

export default Logo
