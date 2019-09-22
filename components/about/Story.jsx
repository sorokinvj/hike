import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tagline from '../shared/Tagline'

const Styled = styled.div`
    background: #F2F2F2;
    margin-top: 4rem;
    padding-bottom: 10rem;
`

const Story = ({img, title, description}) => {
  return (
    <Styled>
      <img src={img} />
      <Tagline 
        title={title}
        description={description}
      />
    </Styled>
  )
}

Story.propTypes = {

}

export default Story
