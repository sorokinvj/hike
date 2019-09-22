import React, { useReducer} from 'react'
import PropTypes from 'prop-types'
import { Container } from '@bootstrap-styled/v4'

// components
import Navbar from '../shared/navbar/'
import ExperienceFacts from './ExperienceFacts'
import HostelOnWheels from './HostelOnWheels'
import Lifeonthemove from '../shared/Lifeonthemove'
import Map from './Map'
import Schedule from './Schedule'
import Tagline from '../shared/Tagline'
import PhotoHero from '../shared/PhotoHero'
import Meta from '../shared/Meta'
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


  const { wallpaper, title, describe, route_description, map, 
    facts_title, facts, schedule_title, route, button_call_to_action_1, 
    description_meta, title_meta} = data

  const [counterBookButton, dispatch] = useReducer(counterReducer, 0)

  return (
    <BookDispatch.Provider value={dispatch}>
      <BookState.Provider value={counterBookButton}>
        <Meta 
          ogUrl={"https://hiketrips.com/tour/" + uid}
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
          title={describe[0].text}
          description={route_description[0].text}
        />
        <Container>
          <BookButton>
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
          <BookButton>
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
  phone: PropTypes.string, 
  uid: PropTypes.string,
  page: PropTypes.shape({
    data: PropTypes.shape({
      button_call_to_action_1: PropTypes.string,
      describe: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      description_meta: PropTypes.string,
      facts_title: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      facts: PropTypes.arrayOf(PropTypes.shape({
        fact_icon: PropTypes.shape({
          url: PropTypes.string
        }),
        fact_name: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string
        })),
      })),
      map: PropTypes.shape({
        url: PropTypes.string,
        mob: PropTypes.shape({
          url: PropTypes.string
        })
      }),
      route: PropTypes.arrayOf(PropTypes.shape({
        highlight_title: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string
        })),
        highlight_img: PropTypes.shape({
          url: PropTypes.string
        }),
        highlight_description: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string
        })),
      })),
      route_description: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      schedule_title: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      title: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      title_meta: PropTypes.string,
      wallpaper: PropTypes.shape({
        url: PropTypes.string,
        mob: PropTypes.shape({
          url: PropTypes.string
        })
      })
    })
  })
}

export default index
