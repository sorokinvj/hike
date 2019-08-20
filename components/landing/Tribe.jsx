import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import H1 from '../style/H1'
import Button from '../style/Button'
// import { Container } from '@bootstrap-styled/v4'

const Styled = styled.div`

    background: url('/static/tribe_back.png');
    margin-top: -1px;
    background-size: cover;
    padding: 6rem 1.5rem 4rem;
    text-align: center;
    height: 91.6rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        color: white;
        margin-bottom: 4rem;
    }
    .body {
        margin-bottom: 6rem;
        color: white;
    }
`

const Tribe = () => {
  return (
    <Styled>
      <div className="text_container">
        <H1>
            Find your tribe
        </H1>
        <p className="body">
            Here is a short text with call to action that says about how are we gonna match people  and why this is important and thus we call our users to push the button “Take Survey” and answer all the questions
        </p>
      </div>
      <Button>
            Take Survey
      </Button>
    </Styled>
  )
}

Tribe.propTypes = {

}

export default Tribe
