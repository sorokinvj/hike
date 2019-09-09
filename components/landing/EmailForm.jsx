import React from 'react'
import styled from 'styled-components'
import Input from '../style/Input'
import Error from '../style/Error'
import Button from '../style/Button'
import Router from 'next/router'
import { logEvent } from '../analytics'
import ReactPixel from 'react-facebook-pixel'


const Styled = styled.div`
    button {
        margin: 3rem 0 0 0;
    }
`

class EmailForm extends React.Component {

  state = {
    email: '',
    firstName: '',
    lastName: ''
  }

  render () {
    const { status, message, onValidated } = this.props
    let color = 'radial-gradient(134.57px at 50.2% -20.24%, #70BAFF 0%, #1B91FD 100%)'
    if (status === "error") {
      color = null
    } else if (status === "success") {
      color = 'radial-gradient(134.57px at 50.2% -20.24%, #7BFF70 0%, #51F304 100%)'
    }
    return (
      <Styled> 
        <form onSubmit={this.submitForm}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChange}
            required
          />
          {status === "error" && (
            <Error 
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <Button 
            color={color}
            type="submit"
          >
            {status === "sending" && 'sending...'}
            {status === "error" && 'error'}
            {status === "success" && 'Success'}
            {status === null && 'Subscribe'}        
          </Button>
        </form>
      </Styled>
    )
  }

  submitForm = (e) => {
    e.preventDefault()
    const { onValidated } = this.props
    const { email, firstName, lastName } = this.state
    // console.log("Router.router.asPath", Router.router.asPath)
    if (email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email,
        TOUR: Router.router.asPath,
        FIRSTNAME: firstName,
        LASTNAME: lastName
      })
    }
    // logEvent({
    //   category: 'Landing',
    //   action: 'Left an email'
    // })
    // ReactPixel.track( 'CompleteRegistration' ) 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default EmailForm