import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BookPopup from './BookPopup'
import ButtonwithTextBelow from '../style/ButtonwithTextBelow'

import { logEvent } from '../analytics'
import ReactPixel from 'react-facebook-pixel'

import BookDispatch from './BookDispatch'
import BookState from './BookState'

const Styled = styled.div`
  text-align: center;
`

const logButtonCall = () => {
  console.log("simulate tracking")
  // logEvent({
  //   category: 'Landing',
  //   action: 'Clicked on Book Now'
  // })
  // ReactPixel.track( 'InitiateCheckout' ) 
}


const BookButton = ({ children }) => {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const dispatch = useContext(BookDispatch)
  const count = useContext(BookState)

  const show = () => {
    setIsShown(true)
    console.log("popup clicked more than one time, specifically - ", count)
    dispatch({type: 'increment'})
  }
  return (
    <Styled>
      <ButtonwithTextBelow onClick={show}>
        {children}
      </ButtonwithTextBelow>
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
