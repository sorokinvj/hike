import React from 'react'
import PropTypes from 'prop-types'
import ExperienceFacts from './ExperienceFacts'
import HostelOnWheels from './HostelOnWheels'
import Lifeonthemove from './Lifeonthemove'
import Map from './Map'
import Schedule from './Schedule'
import Tagline from './Tagline'
import Tribe from './Tribe'
import VideoHero from './VideoHero'
import { Link, RichText } from 'prismic-reactjs'

const index = ({ id }) => {
  return (
        <>
            <VideoHero />
            <Tagline />
            <Map />
            <ExperienceFacts />
            <Lifeonthemove />
            <Schedule />
            <HostelOnWheels />
            <Tribe />
        </>
  )
}

index.propTypes = {

}

export default index
