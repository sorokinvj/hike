import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../style/Button'
import Popup from 'reactjs-popup'
import BookPopup from './BookPopup'
import { logEvent } from '../analytics'

const contentStyle = {
  position: 'relative',
  height: '96%',
  width: '92%',
  border: '0',
  padding: '0',
  overflowY: 'scroll'
}

const Styled = styled.div`
  text-align: center;
`

class BookButton extends React.Component {

    state = {
      popupIsActive: false
    }

    callPopup = () => {
      this.setState({
        popupIsActive: true
      })
      logEvent({
        category: 'Landing',
        action: 'Clicked on Book Now'
      })
    }

    close = () => {
      this.setState({
        popupIsActive: false
      })
    }

    render() {
      return (
        <Styled>
          <Popup
            trigger={        
              <Button onClick={this.callPopup}>
                {this.props.children}
              </Button>}
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
}

BookButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default BookButton
