import React from 'react'
import PropTypes from 'prop-types'

const style = {
  border: '0',
  background: 'transparent',
  cursor: 'pointer',
  position: 'absolute',
  top: '2rem',
  right: '1rem',
  margin: '0'
}

const CloseButton = ({ close }) => {
  return (
    <button onClick={close} style={style}>
      <img className="close-button" src="/static/closebutton.svg" alt="close popup" />
    </button>
  )
}

CloseButton.propTypes = {
  close: PropTypes.func.isRequired
}   

export default CloseButton
