import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { useRecoilState } from 'recoil';
import { currentUserAtom, errorsAtom, emailAtom, passwordAtom } from './atoms'

function Login() {
  const [errors, setErrors] = useRecoilState(errorsAtom);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom)
  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const history = useNavigate();
  
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
    }).then(resp => {
      if(resp.ok){
        resp.json().then(user => {
          setCurrentUser(user)
          console.log(currentUser)
          history('/blogs');
        });
      } else {
        resp.json().then(json => {
          setErrors(json.errors)
          window.alert(errors)
        });
      }
    });
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
