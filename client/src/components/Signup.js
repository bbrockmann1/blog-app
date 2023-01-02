import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')
  const history = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      avatar: avatar
    };
    
    fetch('/users', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(newUser)
    })
    .then(resp => {
      if(resp.ok) {
        history('/done')
      }
    })
    
  }
    
        return (
          <Layout header="Sign up to get started">
            <Form onSubmit={handleSubmit}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                className="auth-input-field"
                name='first_name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                className="auth-input-field"
                name='last_name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                className="auth-input-field"
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                className="auth-input-field"
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Input 
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Upload Your Avatar"
                type='file'
                className="auth-input-field"
                name='avatar'
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
              />   
                         
              <Button color="teal" fluid size="huge" type='submit'>
               Sign up
              </Button>
              

             </Form>
          <Message size="big">
            <Link to="/login">Already Registered?</Link>
          </Message>
        </Layout>
        )
}
export default Signup