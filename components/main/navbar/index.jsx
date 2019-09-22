import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import Popup from 'reactjs-popup'
import Menu from './Menu'
import Burger from '../../shared/Burger'
import Logo from '../../shared/Logo'

const contentStyle = {
  position: 'relative',
  background: 'linear-gradient(180deg, #000000 23%, #002B5D 100%)',
  width: '100%',
  height: '100%',
  margin: '0 0 0 auto',
  border: '0',
  padding: '0',
}

const Nav = styled.nav`
  background: ${props => props.transparent ? 'transparent' : 'black'};
  display: block;
  z-index: 1;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  .popup-overlay {
    height: 50vh;
  }
  .brand-contain {
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.noLogo ? 'flex-end' : 'space-between'};
    align-items: center;
    padding: 2rem 0 2rem 1rem;
  }
  .brand-contain > .menu {
    display: none;
    @media (min-width: 769px) {
      display: flex;
    }
  }
`

const Navbar = ({ transparent, noLogo}) => (
  <Nav transparent={transparent} noLogo={noLogo}>
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="brand-contain">
            {!noLogo &&
              <Logo white />
            }
            <Menu />
            {/* burger button and mobile menu */}
            <Popup
              modal
              closeOnDocumentClick
              contentStyle={contentStyle}
              overlayStyle={{background: 'transparent'}}
              trigger={open => <Burger open={open} />}
              position="top right"
            >
              {close => <Menu close={close} />}
            </Popup>
          </div>
        </Col>
      </Row>
    </Container>
  </Nav>
)

Navbar.propTypes = {
  buttonText: PropTypes.string, 
}

export default Navbar
