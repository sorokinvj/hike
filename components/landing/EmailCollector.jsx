import React from 'react'
import PropTypes from 'prop-types'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import EmailForm from './EmailForm'

const url = "//hiketrips.us3.list-manage.com/subscribe/post?u=caa33ae3204e0079cd98ea4ed&amp;id=1192297a20"

const EmailCollector = ({showThanks, closeBookPopup}) => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => {
    //   console.log(status, message)
      return (
        <div>
          <EmailForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            showThanks={showThanks}
            closeBookPopup={closeBookPopup}
          />
        </div>
      )
    }}
  />
)

EmailCollector.propTypes = {
  closeBookPopup: PropTypes.func.isRequired,
  showThanks: PropTypes.func.isRequired
}

export default EmailCollector
