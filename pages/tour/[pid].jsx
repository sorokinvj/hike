import React from 'react'
import PropTypes from  'prop-types'
import Landing from '../../components/landing'
import Prismic from 'prismic-javascript'
import { client } from '../../prismic-configuration'

class Index extends React.Component {

  static async getInitialProps(ctx) {
    const { query: { pid } } = ctx
    const response = await client.query(
      Prismic.Predicates.at('my.landing.uid', pid),
    )

    return { response, pid }
  }

  render() {
    const  { response, phone, pid } = this.props
    // console.log("pid", this.props)
    return (
      <Landing 
        page={response.results[0]}
        phone={phone}
        uid={pid}
      />
    )
  }
}

Index.propTypes = {
  phone: PropTypes.string,
  pid: PropTypes.string, 
  response: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
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
    }))
  })
}

export default Index
