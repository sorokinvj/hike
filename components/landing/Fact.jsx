import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
    text-align: center;
    width: 20rem;
    &:not(:last-child) {
        margin-bottom: 4rem;
    }
    @media (min-width: 416px) {
        margin-bottom: 4rem;
    }

    p  {
        font-family: 'Nunito Sans',sans-serif;
        font-size: 1.8rem;
        color: #4F4F4F;
        width: 70%;
        margin: 0 auto;
    }

    img {
        margin-bottom: 1.5rem;
        @media (min-width: 416px) {
            height: 7rem;
        }
    }
`

const Fact = ({ item }) => {
  return (
    <Styled>
      <img src={item.fact_icon.url} alt="" />
      <p>{item.fact_name[0].text}</p>
    </Styled>
  )
}

Fact.propTypes = {

}

export default Fact
