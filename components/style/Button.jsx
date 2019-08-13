import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.button`
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
    padding: 1.5rem;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
`

const Button = props => {
  return (
    <Styled onClick={props.onClick} color={props.color}>
      {props.children}
    </Styled>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Button
