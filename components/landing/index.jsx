import React, { useReducer} from 'react'
import PropTypes from 'prop-types'
import { Container } from '@bootstrap-styled/v4'
import Navbar from './navbar/'
import ExperienceFacts from './ExperienceFacts'
import HostelOnWheels from './HostelOnWheels'
import Lifeonthemove from './Lifeonthemove'
import Map from './Map'
import Schedule from './Schedule'
import Tagline from './Tagline'

// import Tribe from './Tribe'
// import VideoHero from './VideoHero'
import PhotoHero from './PhotoHero'
import Meta from './Head'
import BookButton from './BookButton'
import BookDispatch from './BookDispatch'
import BookState from './BookState'

function counterReducer(state, action) {
  switch (action.type) {
  case 'increment':
    return (state + 1)
  default:
    throw new Error()
  }
}


const index = ({ page: { data }, phone, uid }) => {


  const { wallpaper, title, describe, map_title, route_description, map, 
    facts_title, facts, schedule_title, route, button_call_to_action_1, 
    description_meta, title_meta} = data

  const [counterBookButton, dispatch] = useReducer(counterReducer, 0)

  return (
    <BookDispatch.Provider value={dispatch}>
      <BookState.Provider value={counterBookButton}>
        <Meta 
          uid={uid}
          description={description_meta} 
          title={title_meta}
          image={wallpaper.url}
        />
        <Navbar 
          buttonText={button_call_to_action_1}
        />
        <PhotoHero 
          photo={phone !== null ? wallpaper.mob.url : wallpaper.url}
          title={title[0].text}
        />
        <Tagline 
          h1={describe[0].text}
          description={route_description[0].text}
        />
        <Container>
          <BookButton limited>
            {button_call_to_action_1}
          </BookButton>
        </Container>
        <ExperienceFacts 
          title={facts_title[0].text}
          facts={facts}
        />
        <Map 
          mapUrl={phone !== null ? map.mob.url : map.url}
          phone={phone}
        />
        <Schedule 
          title={schedule_title[0].text}
          route={route}
          phone={phone}
        />
        <Container>
          <BookButton limited>
            {button_call_to_action_1}
          </BookButton>
        </Container>
        <Lifeonthemove 
          phone={phone}
        />
        <HostelOnWheels />
      </BookState.Provider>
    </BookDispatch.Provider>
  )
}

index.propTypes = {

}

export default index
