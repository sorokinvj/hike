import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import EmailForm from './EmailForm'

const url = "//hiketrips.us3.list-manage.com/subscribe/post?u=caa33ae3204e0079cd98ea4ed&amp;id=1192297a20"

const EmailCollector = () => (
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
          />
        </div>
      )
    }}
  />
)

export default EmailCollector