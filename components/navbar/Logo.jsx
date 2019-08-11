import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LogoStyled = styled.div`
    width: 120px;
    img {
        width: 100%;
    }
    z-index: 9999;
    margin: 1.5rem auto 0 1.5rem;
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
