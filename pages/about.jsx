// core libs
import React from 'react'
import PropTypes from 'prop-types'

import Prismic from 'prismic-javascript'
import { client } from '../prismic-configuration'

import About from '../components/about'

class AboutPage extends React.Component {

  static async getInitialProps() {
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'about'),
    )

    return { response }
  }

  render() {
    const { phone, response } = this.props
    console.log("about", this.props)
    return (
      <About
        phone={phone}
        page={response.results[0].data}
      />
    )
  }
}

AboutPage.propTypes = {
  phone: PropTypes.string,
  response: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.shape({
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
        subtitile: PropTypes.arrayOf(PropTypes.shape({
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
    }))
  })
}

export default AboutPage
