import React from 'react'
import PropTypes from 'prop-types'

// components
import Meta from '../shared/Meta'
import Navbar from './navbar/'
import PhotoHero from '../shared/PhotoHero'
import Tagline from '../shared/Tagline'
import Eurotour from './Eurotrip'
import Lifeonthemove from '../shared/Lifeonthemove'
import Whyus from './Whyus'
import Contact from './Contact'

const index = ({ page, phone }) => {
  const {
    benefits, 
    benefits_title, 
    button_to_contacts,
    contacts_title,
    description_meta,
    heading, 
    subtitle,
    title,
    title_meta,
    tour_button,
    tour_description,
    tour_img_title,
    tour_heading,
    tour_preview,
    wallpaper } = page

  console.log("main", page)
  return (
      <>
        <Meta 
          uid={'https://hiketrips.com'}
          description={description_meta} 
          title={title_meta}
          image={wallpaper.url}
        />
        <Navbar />
        <PhotoHero 
          photo={phone !== null ? wallpaper.mob.url : wallpaper.url}
          title={title[0].text}
        />
        <Tagline 
          h1={heading[0].text}
          description={subtitle[0].text}
        />
        <Eurotour
          img={phone !== null ? tour_preview.mob.url : tour_preview.url}
          imgTitle={tour_img_title[0].text}
          buttonText={tour_button}
          title={tour_heading[0].text}
          description={tour_description[0].text}
        />
        <Lifeonthemove 
          phone={phone}
        />
        <Whyus 
          title={benefits_title[0].text}
          items={benefits}
        />
        <Contact 
          title={contacts_title[0].text}
          buttonText={button_to_contacts}
        />
  </>
  )
}

index.propTypes = {
  phone: PropTypes.string, 
  page: PropTypes.shape({
    benefits: PropTypes.arrayOf(PropTypes.shape({
      benefit_icon: PropTypes.shape({
        url: PropTypes.string
      }),
      benefits_description: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
      benefits_heading: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
      })),
    })),
    benefits_title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    button_to_contacts: PropTypes.string,
    contacts_title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    description_meta: PropTypes.string,
    heading: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    subtitle: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    title_meta: PropTypes.string,
    tour_button: PropTypes.string,
    tour_description: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    tour_img_title: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    tour_heading: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string
    })),
    tour_preview: PropTypes.shape({
      url: PropTypes.string,
      mob: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    wallpaper: PropTypes.shape({
      url: PropTypes.string,
      mob: PropTypes.shape({
        url: PropTypes.string
      })
    })
  })
}

export default index
