import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../navbar/Logo'
import Menu from '../navbar/Menu'

const Styled = styled.div`
    padding: 8rem 0 10rem;
    background: ${props => props.theme['$darkblue']};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
    }

    .menu {
        margin: 6rem 0;
        ul {
            margin: 0 auto;
            text-align: center;
            li {
                color: white;
            }
        }
    }
    .motto {
        margin: 0;
        font-family: Agrandir Variable;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;
        line-height: 2.3rem;
        text-align: center;
        color: white;
    }
    .copyright {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 14px;
        text-align: center;
        color: white;
    }
`

const index = () => {
  return (
    <Styled>
      <Logo />
      <p className="motto">Life on the move</p>
      <Menu />
      <p className="copyright">All rights reserved (c) 2019 <br />Hiketrips.com</p>
    </Styled>
  )
}

// index.propTypes = {

// }

export default index
