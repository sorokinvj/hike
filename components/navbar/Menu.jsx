import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Links = styled.div`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    @media (min-width: 415px) {
      flex-direction: row;
      margin: 0;
    }
    text-align: right;
    margin: 8.5rem 1.5rem 0 auto;

    li {
      color: white;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 1px;
      margin-bottom: 1.5rem;
      @media (min-width: 415px) {
        margin: 0 2rem 0 0;
        font-size: 1.4rem;
        letter-spacing: 0.7px;
        font-weight: 100;
      }
      font-family: 'Helvetica';
    }
  }
`


const Menu = () => (
  <Links className="menu">
    <ul>
      <Link href="/#home">
        <a>
          <li>Home</li>
        </a>
      </Link>
      <Link href="/tour/wine">
        <a>
          <li>Wine tour</li>
        </a>
      </Link>
      <Link href="/tour/nature">
        <a>
          <li>Nature tour</li>
        </a>
      </Link>
      <Link href="/tour/spiritual">
        <a>
          <li>Spiritual tour</li>
        </a>
      </Link>
      <Link href="/tour/classic">
        <a>
          <li>Classic tour</li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>About</li>
        </a>
      </Link>
    </ul>
  </Links>
)

Menu.propTypes = {
}

Menu.defaultProps = {
}

export default Menu
