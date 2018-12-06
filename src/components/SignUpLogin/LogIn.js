import React from "react";
import { Button, Form, Header } from "semantic-ui-react";
 
const LoginForm = () => (
  <Form style={formStyle}>
    <Header style={info} as='h4'>Please login below</Header>
    <Form.Field style={formField}>
      <Form.Input style={formInput} label="Username" placeholder="Enter Username" width={4} />
    </Form.Field>
    <Form.Field style={formField}>
      <Form.Input style={formInput} label="Password" placeholder="Enter password" width={4} />
    </Form.Field>
    <Button style={buttonStyle}>Login</Button>
  </Form>
);

const formStyle = {
  marginLeft: 500, 
  marginTop: 100,
  width: 550,
}
const title = {
  marginLeft: 150
}

const info = {
  textAlign: 'center'
}

const formField = {
  marginTop: 30,
  marginLeft: 80
}

const formInput = {
  width: 400
}

const buttonStyle = {
  borderRadius: 18,
  width: 200,
  marginLeft: 160,
  marginTop: 20,
  backgroundColor: '#3865fe',
  color: 'white',
}

export default LoginForm; 