import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Links = styled.div`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 8.5rem 1.5rem 0 auto;

    li {
      color: ${props => props.theme['$darkblue']};
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-transform: uppercase;
      display: inline-block;
      letter-spacing: 1px;
      margin-bottom: 1.5rem;
      font-family: 'Helvetica';
    }
  }
`;


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
      <Link href="/tour/music">
        <a>
          <li>Music tour</li>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <li>About</li>
        </a>
      </Link>
    </ul>
  </Links>
);

Menu.propTypes = {
};

Menu.defaultProps = {
};

export default Menu;
