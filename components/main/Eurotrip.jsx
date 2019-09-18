import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '@bootstrap-styled/v4'
import Link from 'next/link'
import Button from '../style/Button'
import PhotoHero from '../shared/PhotoHero'
import Tagline from '../shared/Tagline'

const Styled = styled.div`

    a {
      margin: 0 auto;
    }
`

const Eurotrip = ({ img, imgTitle, buttonText, title, description }) => {
//   console.log('eurotrip', img, imgTitle, buttonText, title, description)
  return (
    <Styled>
      <PhotoHero 
        photo={img}
        title={imgTitle}
      /> 
      <Tagline 
        h1={title}
        description={description}
      />
      <Container>
        <Row>
          <Link href="/tour/lisbon-berlin">
            <a>
              <Button>
                {buttonText}
              </Button>
            </a>
          </Link>
        </Row>
      </Container>
    </Styled>
  )
}

Eurotrip.propTypes = {
  buttonText: PropTypes.string,
  img: PropTypes.string, 
  imgTitle: PropTypes.string, 
  title: PropTypes.string, 
  description: PropTypes.string
}

export default Eurotrip
