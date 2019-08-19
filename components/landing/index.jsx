import React from 'react'
import PropTypes from 'prop-types'
import ExperienceFacts from './ExperienceFacts'
import HostelOnWheels from './HostelOnWheels'
import Lifeonthemove from './Lifeonthemove'
import Map from './Map'
import Schedule from './Schedule'
import Tagline from './Tagline'
import Tribe from './Tribe'
// import VideoHero from './VideoHero'
import PhotoHero from './PhotoHero'

const index = ({ page: { data }, phone }) => {
  console.log(data)
  return (
        <>
            <PhotoHero 
              photo={phone !== null ? data.wallpaper.mob.url : data.wallpaper.url}
              title={data.title[0].text}
            />
            <Tagline 
              h1={data.describe[0].text}
              buttonText={data.button_call_to_action_1}
            />
            <Map 
              map={phone !== null ? data.map.mob.url : data.map.url}
            />
            <ExperienceFacts 
              title={data.facts_title[0].text}
              facts={data.facts}
            />
            <Lifeonthemove 
              phone={phone}
            />
            <Schedule 
              title={data.schedule_title[0].text}
              route={data.route}
              phone={phone}
              bookText={data.button_call_to_action_2}
            />
            <HostelOnWheels />
            {/* <Tribe /> */}
        </>
  )
}

index.propTypes = {

}

export default index
