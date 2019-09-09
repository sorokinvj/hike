import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CloseButton from './CloseButton'
import { Container, Row, Col } from '@bootstrap-styled/v4'
import H1 from '../style/H1'
import Modal from '../style/Modal'

const Styled = styled.div`
    padding: 10rem 0;
    text-align: center;

    h1 {
        margin-bottom: 4rem;
    }
    .body {
        margin-bottom: 4rem;
    }
`

const ThanksPopup = ({ close }) => {
  return (
    <Modal close={close}>
      <Container>
        <CloseButton close={close} />
        <Row>
          <Col xs={12} md={{size: 8, offset: 2}} lg={{size: 6, offset:3}}>
            <Styled>
              <H1>
                Thanks!
              </H1>
              <p className="body">
                We will be in touch with you soon
              </p>
            </Styled>
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

ThanksPopup.propTypes = {
  close: PropTypes.func.isRequired
}

export default ThanksPopup
