import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../prismic-configuration'
import H1 from '../style/H1'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10rem 0;
  margin: 10rem 0 0 0;

  h1 {
      margin-bottom: 8rem;
  }
  .benefits {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 416px) {
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 769px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    .item {
      text-align: center;
      &:not(:last-child) {
          margin-bottom: 8rem;
      }
      @media (min-width: 416px) {
        margin-bottom: 6rem;
      }

      p {
        font-family: 'Nunito Sans',sans-serif;
        font-size: 1.6rem;
        color: #4F4F4F;
        width: 90%;
        @media (min-width: 416px) and (max-width: 768px) {
          width: 50%;
        }
        @media (min-width: 769px) {
          width: 85%;
        }
        margin: 0 auto;
      }
      .title {
        font-weight: bold;
        margin-bottom: 2rem; 
      }

      img {
        margin-bottom: 3rem;
      }
    }
  }
`
const Team = ({ title, items }) => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <H1>{title}</H1>
            <div className="benefits">
              {items.map(item => (
                <div className="item" key={item.name[0].text}> 
                  <img src={item.img.url} alt="" />
                  <div className="title">{RichText.render(item.name, linkResolver)}</div>
                  <div className="description">{RichText.render(item.description, linkResolver)}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>        
    </Styled>
  )
}

Team.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
    })),
    description: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
    })),
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
}

Team.defaultProps = {
  title: '',
  items: []
}

export default Team
