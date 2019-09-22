import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H1 from '../style/H1'

import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../prismic-configuration'

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;
    h1 {
        margin-bottom: 10rem;
    }

    img {
        margin-bottom: 3rem;
    }
`

const Partners = ({ title, partners}) => {
  return (
    <Styled>
      <H1>
        {title}
      </H1>
      {partners.map(partner => (
        <Fragment key={partner.description[0].text}>
          <img src={partner.logo.url} alt={partner.description[0].text} />
          {RichText.render(partner.description, linkResolver)}
        </Fragment>
      ))}
    </Styled>
  )
}

Partners.propTypes = {

}

export default Partners
