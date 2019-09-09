import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BookPopup from './BookPopup'
import ThanksPopup from './ThanksPopup'
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
  logEvent({
    category: 'Landing',
    action: 'Clicked on Book Now'
  })
  ReactPixel.track( 'InitiateCheckout' ) 
}


const BookButton = ({ children, nav }) => {

  // из контекста беру значение переменной "сколько раз кликали на попап"
  // и функцию увеличения значения этой переменной на  1
  const dispatch = useContext(BookDispatch)
  const count = useContext(BookState)

  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => {
    setIsShown(true)
    if (count < 1) {
      logButtonCall()
    }
    dispatch({type: 'increment'})
  }
  
  const [thanksIsShown, setThanksShown] = useState(false)
  const hideThanks = () => setThanksShown(false)
  const showThanks = () => setThanksShown(true)

  return (
    <Styled margin={nav}>
      <Button onClick={show}>
        {children}
      </Button>

      {isShown && 
        <BookPopup 
          close={hide}
          showThanks={showThanks}
        />
      }
      {thanksIsShown && 
        <ThanksPopup 
          close={hideThanks}
        />
      }
    </Styled>
  )
}
  

BookButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  nav: PropTypes.bool
}

export default BookButton
