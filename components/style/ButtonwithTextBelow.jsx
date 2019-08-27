import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
  button {
    background: ${props => props.color || 'linear-gradient(182.95deg, #C420D4 -240.05%, #FE265C 100%)'};
    border-radius: 2.5rem;
    font-family: Helvetica;
    font-size: 2rem;
    line-height: 2.3rem;
    text-align: center;
    letter-spacing: 2.58333px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: 0;
    box-shadow: none;
    width: 100%;
    @media (min-width: 416px) {
      width: 35rem;
    }
    padding: 1.5rem;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  .limited {
    color: #FF0046;
    font-size: 1.8rem;
    margin-top: 1rem;
  }
`

const ButtonwithTextBelow = ({ type, color, children, onClick }) => {
  return (
    <Styled color={color}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
      <p className="limited">Limited number of seats</p>
    </Styled>
  )
}

ButtonwithTextBelow.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ButtonwithTextBelow
