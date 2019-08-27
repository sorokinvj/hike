import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonwithTextBelow from '../style/ButtonwithTextBelow'
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
`

class BookButton extends React.Component {

  render() {
    return (
      <Styled>
        <Popup
          trigger={  
            <ButtonwithTextBelow>
              {this.props.children}
            </ButtonwithTextBelow>
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
