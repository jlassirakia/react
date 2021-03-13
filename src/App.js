
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Form} from "react-bootstrap"


function App() {
  return (
   
    <Form>
       <h1> Login </h1>
    <Form.Group controlId="formBasicEmail">
      <Form.Label className="label"> <b>Email address</b></Form.Label>
      <Form.Control className="Box" type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label className="label"><b>Password </b></Form.Label>
      <Form.Control className="Box" type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check  className ="check"  type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default App;
