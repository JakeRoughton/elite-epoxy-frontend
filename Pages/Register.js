import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../Hooks/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Hooks/AuthUtils";


const Register = (props) => {

  // const auth = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (    
  <>
    <br />
    <br />
    <div id='requestFormDiv'>
    <Card border='success' id='LoginCard' style={{ width: '30rem', height:'33rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
  <Card.Body>
    <Card.Title>Register</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Please enter your information to register</Card.Subtitle>
    <br />
    <Card.Text>
    <Form>

    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>First name</Form.Label>
    <Form.Control 
    name="firstName"
    placeholder="First name"
    value={firstName}
		onChange={(e) => setFirstName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Last name</Form.Label>
    <Form.Control 
    name="lastName"
    placeholder="Last name" 
    value={lastName}
		onChange={(e) => setLastName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    name="emailAddress"
    placeholder="Email address" 
    value={email}
		onChange={(e) => setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password"
    name="password"
    placeholder="Password" 
    value={password}
		onChange={(e) => setPassword(e.target.value)}
    />
  </Form.Group>

    </Form>
    </Card.Text>

    <a href="/login">Already a member? Login</a>
    <br />
    <Button variant='success' style={{backgroundColor:'#046307'}}
    onClick={async () => {
      const users = {firstName, lastName, email, password}
      const registerResult = await registerUser(users)
      if (registerResult.success) {
        navigate("/login");
      }
    }}>Submit</Button>

  </Card.Body>
</Card>
</div>
<br />
<br />              
    </>
  );
}

export default Register;
