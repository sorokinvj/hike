import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10rem 0;
  margin: 10rem 0 0 0;
  .benefits {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 416px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    .item {
      text-align: center;
      &:not(:last-child) {
          margin-bottom: 5rem;
      }
      @media (min-width: 416px) {
        margin-bottom: 4rem;
      }

      p  {
        font-family: 'Nunito Sans',sans-serif;
        font-size: 1.8rem;
        color: #4F4F4F;
        width: 90%;
        margin: 0 auto;
      }
      p.title {
        font-weight: bold;
        margin-bottom: 2rem; 
      }

      img {
        margin-bottom: 3rem;
        @media (min-width: 416px) {
          height: 7rem;
        }
      }
    }
  }
`
const Whyus = ({ title, items }) => {
  return (
    <Styled>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <H1>{title}</H1>
            <div className="benefits">
              {items.map(item => (
                // yes it's "tile" not "title" ↓↓↓↓↓↓↓
                <div className="item" key={item.tile[0].text}> 
                  <img src={item.icon.url} alt="" />
                  <p className="title">{item.tile[0].text}</p>
                  <p className="description">{item.description[0].text}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>        
    </Styled>
  )
}

Whyus.propTypes = {
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

Whyus.defaultProps = {
  title: '',
  items: []
}

export default Whyus
