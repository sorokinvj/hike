import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col } from '@bootstrap-styled/v4'
import H2 from '../style/H2'

const Styled = styled.div`

    position: relative;
    margin-bottom: 6rem;

    .back {
        background:${props => ("url(" + props.background + ")")};
        background-size: cover;
        height: 22rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 2rem; 
        padding-left: 1.5rem;
    }
    h2 {
        color: white;
    }
    .body {
        padding: 1.5rem;
    }
`


const Day = ({ day }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Styled background={day.highlight_img.url}>
        <div className="back">
          <H2>
            {day.highlight_title[0].text}
          </H2>
        </div>   
        <p className="body">
          {day.highlight_description[0].text}
        </p>    
      </Styled>
    </Col>
  )
}

Day.propTypes = {
  day: PropTypes.shape({
    highlight_title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    highlight_img: PropTypes.shape({
      url: PropTypes.string
    }),
    highlight_description: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
  })
}

Day.defaultProps = {
  day: {}
}

export default Day
