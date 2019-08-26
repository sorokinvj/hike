import React from 'react'
import PropTypes from 'prop-types'
import ExperienceFacts from './ExperienceFacts'
import HostelOnWheels from './HostelOnWheels'
import Lifeonthemove from './Lifeonthemove'
import Map from './Map'
import Schedule from './Schedule'
import Tagline from './Tagline'
// import Tribe from './Tribe'
// import VideoHero from './VideoHero'
import PhotoHero from './PhotoHero'

const index = ({ page: { data }, phone }) => {
  const { wallpaper, title, describe, map_title, route_description, map, 
    facts_title, facts, schedule_title, route, button_call_to_action_1} = data
  return (
    <>
      <PhotoHero 
        photo={phone !== null ? wallpaper.mob.url : wallpaper.url}
        title={title[0].text}
      />
      <Tagline 
        h1={describe[0].text}
        buttonText={button_call_to_action_1}
        description={route_description[0].text}
      />
      <ExperienceFacts 
        title={facts_title[0].text}
        facts={facts}
        buttonText={button_call_to_action_1}
      />
      <Map 
        mapUrl={phone !== null ? map.mob.url : map.url}
        phone={phone}
      />
      <Schedule 
        title={schedule_title[0].text}
        route={route}
        phone={phone}
        buttonText={button_call_to_action_1}
      />
      <Lifeonthemove 
        phone={phone}
      />
      <HostelOnWheels 
        buttonText={button_call_to_action_1}
      />
    </>
  )
}

index.propTypes = {

}

export default index
