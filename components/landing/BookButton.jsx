import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BookPopup from './BookPopup'
import ButtonwithTextBelow from '../style/ButtonwithTextBelow'
import Button from '../style/Button'

import { logEvent } from '../analytics'
import ReactPixel from 'react-facebook-pixel'

import BookDispatch from './BookDispatch'
import BookState from './BookState'

const Styled = styled.div`
  text-align: center;
  /* margin: ${props => props.margin ? '0' : '6rem 0 10rem 0'}; */
`

const logButtonCall = () => {
  console.log("simulate tracking")
  // logEvent({
  //   category: 'Landing',
  //   action: 'Clicked on Book Now'
  // })
  // ReactPixel.track( 'InitiateCheckout' ) 
}


const BookButton = ({ children, nav }) => {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const dispatch = useContext(BookDispatch)
  const count = useContext(BookState)

  const show = () => {
    setIsShown(true)
    if (count < 1) {
      logButtonCall()
    }
    dispatch({type: 'increment'})
  }
  return (
    <Styled margin={nav}>
      <Button onClick={show}>
        {children}
      </Button>

      {isShown && 
        <BookPopup 
          close={hide}
        />
      }
    </Styled>
  )
}
  

BookButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default BookButton
