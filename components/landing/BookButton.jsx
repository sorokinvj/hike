import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../style/Button'
import Popup from 'reactjs-popup'
import BookPopup from './BookPopup'

import { logEvent } from '../analytics'
import ReactPixel from 'react-facebook-pixel'

const contentStyle = {
  position: 'relative',
  height: '96%',
  width: 'auto',
  border: '0',
  padding: '0',
  overflowY: 'scroll'
}

const Styled = styled.div`
  text-align: center;

  .limited {
    color: #FF0046;
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`

class BookButton extends React.Component {

  render() {
    return (
      <Styled>
        <Popup
          trigger={ 
            <>       
            <Button>
              {this.props.children}
            </Button>
            <p className="limited">Limited number of seats</p>
            </>
          }
          onOpen={this.callPopup}
          modal
          lockScroll
          closeOnDocumentClick
          closeOnEscape
          contentStyle={contentStyle}
        >
          {close => (
            <BookPopup close={close} />
          )}
        </Popup>
      </Styled>
    )
  }

  callPopup = () => {
    logEvent({
      category: 'Landing',
      action: 'Clicked on Book Now'
    })
    ReactPixel.track( 'InitiateCheckout' ) 
  }
}

BookButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default BookButton
