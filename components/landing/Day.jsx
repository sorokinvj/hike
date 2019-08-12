import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { Col } from '@bootstrap-styled/v4'
import H2 from '../style/H2'

const Styled = styled.div`

    position: relative;
    &:not(:last-child) {
        margin-bottom: 6rem;
    }

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
    
    .day {
        background: radial-gradient(33.00px at 50% 0%, #FF3E72 0%, #FF0046 100%);
        color: white;
        font-family: Fira Sans Extra Condensed;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        text-transform: uppercase;
        width: 7.2rem;
        position: absolute;
        top: -1.8rem;
        left: 1.5rem;
        padding: 0.6rem 0;
    }
`


const Day = ({ day }) => {
  return (
    <Styled background={day.image}>
      <div className="day">
        {`day ${day.day}`}
      </div>  
      <div className="back">
        <H2>
          {day.headline}
        </H2>
      </div>   
      <p className="body">
        {day.description}
      </p>    
    </Styled>
  )
}

Day.propTypes = {
  day: PropTypes.shape({
    image: PropTypes.string,
    day: PropTypes.number,
    headline: PropTypes.string,
    description: PropTypes.string,
  })
}

Day.defaultProps = {
  day: {}
}

export default Day
