import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import H2 from '../style/H2'

const Styled = styled.div`

    background: url('/static/lifeonthemove_back.png');
    background-size: cover;
    color: white;
    text-align: center;
    height: 59.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4rem 0;

    .body {
        margin-top: 1.5rem;
    }

`

const Lifeonthemove = () => {
    return (
        <Styled>
            <H2>Life on the move</H2>
            <p className="body">
                Get the most out of Europe by covering huge distances at night while sleeping in our super comfortable bus
            </p>
        </Styled>
    )
}

// Lifeonthemove.propTypes = {

// }

export default Lifeonthemove
