import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BurgerButton = styled.div`

    @media (min-width: 769px) {
      display: none;
    }
    position: relative;
    z-index: 9999;
    margin: 1.5rem 3rem 0 0;
    
    .burger-menu {
      display: inline-block;
      cursor: pointer;
      z-index: 9999;
      background: transparent;
      .bar1, .bar2, .bar3 {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 4px 0;
        transition: 0.4s;
      }

      &.open {
        .bar1 {
          -webkit-transform: rotate(-45deg) translate(-4px, 4px);
          transform: rotate(-45deg) translate(-4px, 4px);
        }
        .bar2 {
          opacity: 0;
        }
        .bar3 {
          -webkit-transform: rotate(45deg) translate(-6px, -6px);
          transform: rotate(45deg) translate(-6px, -6px);
        }
      }
    }
`;

const Burger = ({ open, ...props }) => (
  <BurgerButton>
    <div className={open ? 'burger-menu open' : 'burger-menu'} {...props}>
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  </BurgerButton>
);

Burger.propTypes = {
  open: PropTypes.bool,
};
Burger.defaultProps = {
  open: false,
};

export default Burger;
