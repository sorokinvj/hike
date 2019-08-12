import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Col } from '@bootstrap-styled/v4';
import H1 from '../style/H1'
import Button from '../style/Button'

const Section = styled.div`
    padding: 10rem 0;
`

const Tagline = props => {
    return (
    <Container>
        <Row>
            <Col xs="12">
                <Section>
                    <H1>
                        Now accepting applications for our launch this fall
                    </H1>
                    <Button>
                        Apply now
                    </Button>
                </Section>
            </Col>
        </Row>
    </Container>
    )
}

Tagline.propTypes = {

}

export default Tagline
