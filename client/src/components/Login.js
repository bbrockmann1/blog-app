import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { useRecoilState } from 'recoil';
import { errorsAtom } from './atoms'

function Login() {
  const [errors, setErrors] = useRecoilState(errorsAtom);
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };

    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'Application/json'},
      body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                history(`/blogs`)
            })
        }else {
            res.json().then(json => {
              setErrors(json.errors)
              window.alert(errors)
            })
        }
    })
    
  };
  
  return (
    <>
      <Layout header="Log in">
        <Form onSubmit={handleSubmit}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            className="auth-input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            className="auth-input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color="teal" fluid size="huge" type='submit'>
            Login
          </Button>
        </Form>
        <Message size="big">
          <Link to="/signup">Not Registered?</Link>
        </Message>
      </Layout>
      
    </>
  );
};

export default Login;
