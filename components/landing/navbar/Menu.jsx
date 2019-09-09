import React from 'react'
import Link from 'next/link'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import BookButton from '../BookButton'

const Links = styled.div`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 769px) {
      flex-direction: row;
      margin: 0;
    }
    @media (min-width: 415px) and (max-width: 768px) {
      margin: 8.5rem 4rem 0 auto;
    }
    text-align: right;
    margin: 11rem auto 0;

    li {
      color: white;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 1px;
      margin-bottom: 2.5rem;
      @media (min-width: 769px) {
        margin: 0 2rem 0 0;
        font-size: 1.4rem;
        letter-spacing: 0.7px;
        font-weight: 100;
      }
      font-family: 'Helvetica';
    }
  }
  button {
    padding: 0.8rem 2rem;
    font-size: 1.6rem;
    letter-spacing: 1px;
    width: 20rem;
    @media (min-width: 769px) {
      display: block;
      margin: 0 0 0 3rem;
    }
  }
`


const Menu = ({ buttonText, noButton }) => (
  <Links className="menu">
    {console.log('menu', buttonText)}
    <ul>
      <Link href="#route">
        <a>
          <li>Route details</li>
        </a>
      </Link>
      <Link href="#move">
        <a>
          <li>Life on the move</li>
        </a>
      </Link>
      <Link href="#virtual_tour">
        <a>
          <li>Virtual tour</li>
        </a>
      </Link>
      {!noButton && 
      <BookButton>
        More info
      </BookButton>
      }
    </ul>
  </Links>
)

// Menu.propTypes = {
  
// }

// Menu.defaultProps = {
// }

export default Menu
