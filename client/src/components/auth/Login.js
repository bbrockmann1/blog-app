import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { useRecoilState } from 'recoil';
import { signupAtom, errorsAtom } from './atoms'

function Login() {
  const [signup, setSignup] = useRecoilState(signupAtom); 
  const [errors, setErrors] = useRecoilState(errorsAtom);
  
  return (
    <Layout header="Log in">
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="E-mail address"
        className="auth-input-field"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
        className="auth-input-field"
      />

      <Link to="/blogs">
        <Button color="teal" fluid size="huge">
          Login
        </Button>
      </Link>

      <Message size="big">
        <Link to="/signup">Not Registered?</Link>
      </Message>
    </Layout>
  );
};

export default Login;
