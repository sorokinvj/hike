import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Background = styled.div`
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`
const Content = styled.div`
  @media (min-width: 769px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  width: 100%;
  height: 90%;
  z-index: 1001;
  overflow-y: scroll;
  background: white;
  position: relative;
`

const Modal = ({ children, close }) => (
  ReactDOM.createPortal(
    <Background onClick={e => {
      if (e.currentTarget.className === e.target.className){
        close()
      }
    }}>
      <Content>
        {children}
      </Content>
    </Background>,
    document.getElementById('modal-root')
  ))

Modal.propTypes = {

}

export default Modal
