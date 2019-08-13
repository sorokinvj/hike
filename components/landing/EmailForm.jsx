import React from 'react'
import styled from 'styled-components'
import Input from '../style/Input'
import Error from '../style/Error'
import Button from '../style/Button'


const Styled = styled.div`
    button {
        margin: 3rem 0 0 0;
    }
`

const EmailForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      })
  let color = 'radial-gradient(134.57px at 50.2% -20.24%, #70BAFF 0%, #1B91FD 100%)'
  if (status === "error") {
    color = null
  } else if (status === "success") {
    color = 'radial-gradient(134.57px at 50.2% -20.24%, #7BFF70 0%, #51F304 100%)'
  }

  return (
    <Styled> 
      <Input
        ref={node => (email = node)}
        type="email"
        placeholder="Type your email"
      />
      {status === "error" && (
        <Error 
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <Button onClick={submit} 
        color={color}
      >
        {status === "sending" && 'sending...'}
        {status === "error" && 'error'}
        {status === "success" && 'Success'}
        {status === null && 'Subscribe'}        
      </Button>
    </Styled>
  )
}

export default EmailForm