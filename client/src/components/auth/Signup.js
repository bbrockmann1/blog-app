import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";

function Signup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    avatar: ''
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch('/users', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...formData, ongoing:true})
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
                value={formData.first_name}
                onChange={handleChange}
                as={Form.Input}
                onSubmit={handleSubmit}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                className="auth-input-field"
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                as={Form.Input}
                onSubmit={handleSubmit}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                className="auth-input-field"
                name='email'
                value={formData.email}
                onChange={handleChange}
                as={Form.Input}
                onSubmit={handleSubmit}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                className="auth-input-field"
                name='password'
                value={formData.password}
                onChange={handleChange}
                as={Form.Input}
                onSubmit={handleSubmit}
              />
              <Form.Input 
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Upload Your Avatar"
                type='file'
                className="auth-input-field"
                name='avatar'
                value={formData.avatar}
                onChange={handleChange}
                as={Form.Input}
                onSubmit={handleSubmit}
              />
            </Form>
              <Link to="/done">
                <Button color="teal" fluid size="huge">
                  Sign up
                </Button>
              </Link>
            
          <Message size="big">
            <Link to="/login">Already Registered?</Link>
          </Message>
        </Layout>
        )
}
export default Signup