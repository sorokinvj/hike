import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Input from '../style/Input'
import Error from '../style/Error'
import Button from '../style/Button'

const Styled = styled.div`
`

class EmailForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  render () {
    const { status, message } = this.props
    let color = 'radial-gradient(134.57px at 50.2% -20.24%, #70BAFF 0%, #1B91FD 100%)'
    if (status === "error") {
      color = null
    } else if (status === "success") {
      color = 'radial-gradient(134.57px at 50.2% -20.24%, #7BFF70 0%, #51F304 100%)'
    }
    console.log("error", status, message)
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
        {status === "error" && (
          <Error 
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </Styled>
    )
  }

  submitForm = (e) => {
    e.preventDefault()
    const { onValidated } = this.props
    const { email } = this.state
    // console.log("Router.router.asPath", Router.router.asPath)
    if (email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email,
        TOUR: 'FOOTER',
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
}

EmailForm.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
  onValidated: PropTypes.func.isRequired, 
}

export default EmailForm