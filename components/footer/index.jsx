import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../landing/navbar/Logo'
import Menu from '../landing/navbar/Menu'

const Styled = styled.div`
  padding: 8rem 0 10rem;
  background: ${props => props.theme['$darkblue']};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  .copyright, .contacts {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: white;
    margin-top: 4rem;
  }
  .contacts {
    font-size: 14px;
    line-height: 18px;

    a {
      color: white;
      text-decoration: underline;
    }
  }
  .menu {
    margin: 4rem 0 0 0;
  }
`

const index = ({ page }) => {
  return (
    <Styled>
      <Logo white />
      <p className="motto">Life on the move</p>
      <Menu noButton />
      <p className="contacts">
        <a href="mailto:hello@hiketrips.com">
          hello@hiketrips.com
        </a>
      </p>
      <p className="contacts">
        Lisbon, Portugal
      </p>
      <p className="copyright">All rights reserved (c) 2019 <br />Hiketrips.com</p>
    </Styled>
  )
}

index.propTypes = {
  page: PropTypes.string
}

export default index
