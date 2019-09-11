import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import Popup from 'reactjs-popup'
import Menu from './Menu'
import Burger from './Burger'
import Logo from './Logo'

const contentStyle = {
  position: 'relative',
  background: 'rgba(3, 14, 71, 0.7)',
  width: '100%',
  height: '100%',
  margin: '0 0 0 auto',
  border: '0',
  padding: '0',
}

const Nav = styled.nav`
  background: ${props => props.theme["$darkblue"]};
  display: block;
  /* transition: transform 0.3s ease-out;
  transform: translateY(0);
  &.collapsed {
    transform:translateY(-8rem); 
  } */
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
    justify-content: space-between;
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

const Navbar = ({ buttonText }) => (
  <Nav>
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="brand-contain">
            <Logo white />
            <Menu buttonText={buttonText} />
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
}

export default Navbar
