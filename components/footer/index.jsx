import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import Logo from '../shared/Logo'
import Menu from '../shared/navbar/Menu'
import EmailForm from './EmailForm'
import EmailCollector from '../shared/EmailCollector'

const Styled = styled.div`
  padding: 8rem 0 10rem;
  background: linear-gradient(180deg, #002B5D 0%, #000000 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .menu {
    margin: 6rem 0;
    @media (min-width: 769px) {
      margin: 1rem 0 3rem 0;
    }
    @media (min-width: 416px) and (max-width:768px) {
      margin: 1rem 0 0 0;
    }
    ul {
      margin: 0 auto;
      text-align: center;
      @media (min-width: 416px) {
        margin: 0;
        text-align: left;
        flex-direction: row;
      }
      li {
        color: white;
        @media (min-width: 416px) {
          margin-right: 1rem;
        }
      }
    }
  }
  .copyright, .contacts, .address, .newsletter {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: normal;
    text-align: center;
    @media (min-width: 416px) {
      text-align: left;
    }
    color: rgba(255,255,255,0.5);
  }
  .contacts, .address, .newsletter {
    font-size: 1.4rem;
    line-height: 1.8rem;

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
  .contacts {
    margin: 3rem 0 1rem;
  }
  .copyright {
    font-size: 1rem;
    margin-top: 4rem;
  }
  .newsletter {
    margin-bottom: 1rem;
  }
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 416px) {
      flex-direction: row;
      align-items: flex-start;
    }
  
    input {
      padding: 1rem 0;
      width: 100%;
      margin: 0 0 2rem 0;
      @media (min-width: 416px) {
        margin-right: 3rem;
      }
    }
    button {
      margin: 0;
      width: 20rem;
      padding: 0.8rem 2rem;
      font-size: 1.6rem;
      letter-spacing: 1px;
      height: 4.6rem;
      margin-bottom: 10rem;
      @media (min-width: 416px) {
        margin-bottom: 0;
      }
    }
  }
`

const index = ({ page, phone }) => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col className="order-md-3" xs={12} md={{size: 8, offset: 1 }} >
            <Menu noButton />
            <p className="newsletter">Subscribe to our newsletter</p>
            <EmailCollector 
              EmailForm={EmailForm}
            />
          </Col>
          <Col className="order-md-1" xs={12} md={{size: 3}}>
            <Logo white center={phone}/>
            <p className="contacts">
              <a href="mailto:hello@hiketrips.com">
                hello@hiketrips.com
              </a>
            </p>
            <p className="address">
              Lisbon, Portugal
            </p>
            <p className="copyright">All rights reserved (c) 2019 <br />Hiketrips.com</p>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

index.propTypes = {
  page: PropTypes.string
}

export default index
