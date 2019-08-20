import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import Popup from 'reactjs-popup'
import Menu from './Menu'
import Burger from './Burger'
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
    background: #002b5d;
    /* display: ${props => props.visible ? 'flex' : 'none'}; */
    display: flex;
    transition: transform 0.3s ease-out;
    transform: translateY(0);
    &.collapsed {
      transform:translateY(-8rem); 
    }
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
    }
`

class Navbar extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  render() {

    const { visible } = this.state
    return  (
      <Nav visible={visible} className={!visible && 'collapsed'}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="brand-contain">
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
              </div>
            </Col>
          </Row>
        </Container>
      </Nav>
    )
  }

  componentDidMount() {
    this.setState({
      prevScrollpos: window.pageYOffset,
    })
    window.addEventListener("scroll", this.handleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {  
    const currentScrollPos = window.pageYOffset
    const visible = currentScrollPos > 500  
    this.setState({
      visible
    })
  };
}

// index.propTypes = {

// }

export default Navbar
