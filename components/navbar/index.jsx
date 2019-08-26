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
  background: 'rgba(3, 14, 71, 0.51)',
  width: '100%',
  height: '100%',
  margin: '0 0 0 auto',
  border: '0',
  padding: '0',
}

const Nav = styled.nav`
    background: ${props => props.theme["$darkblue"]};
    display: flex;
    /* transition: transform 0.3s ease-out;
    transform: translateY(0);
    &.collapsed {
      transform:translateY(-8rem); 
    } */
    z-index: 1;
    height: auto;
    position: fixed;
    top: 0;
    width: 100%;
    .popup-overlay {
        height: 50vh;
    }
    .brand-contain {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
    }
    .brand-contain > .menu {
      display: none;
      @media (min-width: 769px) {
        display: flex;
      }
  }
`

class Navbar extends React.Component {

  render() {
    const { page } = this.props
    return  (
      <Nav>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div className="brand-contain">
                {page !== '/' && <Logo white />}
                {page !== '/' && <Menu />}
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
  }
}

Navbar.propTypes = {
  page: PropTypes.string
}

export default Navbar
