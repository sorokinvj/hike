import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row } from '@bootstrap-styled/v4';
import Popup from 'reactjs-popup';
import Menu from './Menu'
import Burger from './Burger';
import Logo from './Logo'

const contentStyle = {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    height: '100%',
    margin: '0 0 0 auto',
    border: '0',
    padding: '0',
}

const Nav = styled.nav`
    padding: 15px;
    background: transparent;
    display: flex;
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    .container {

    }
    .row {
        justify-content: space-between;
        
    }
    .row > .menu {
            display: none;
    }
    .popup-overlay {
        height: 50vh;
    }
`

const index = props => {
    return (
    <Nav>
        <Container>
            <Row>
                <Logo />
                <Menu />
                {/* burger button and mobile menu */}
                <Popup
                    modal
                    closeOnDocumentClick
                    contentStyle={contentStyle}
                    trigger={open => <Burger open={open} />}
                    position="top right"
                >
                    {close => <Menu close={close} />}
                </Popup>
            </Row>
        </Container>
  
    </Nav>
    )
}

index.propTypes = {

}

export default index
