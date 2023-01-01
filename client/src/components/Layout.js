import React from "react";
import { Form, Header } from "semantic-ui-react";
import "./auth.css";
import logo from '../logo.png';

function Layout(props) {
  return (
    <div className="auth-main">
      <div class="auth-content">
        <div className="auth-card">
          <img src={logo} alt="Logo" className="auth-logo" />
          <Header as="h2" color="black" textAlign="center">
            {props.header}
          </Header>
          <Form.Group size="large" className="auth-form" autoComplete="off">
            {props.children}
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default Layout;
