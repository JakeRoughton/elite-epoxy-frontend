import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../Hooks/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const { login } = useAuth();

	// const navigate = useNavigate();

	// const handleSubmit = async () => {
	// 	const userData = {
	// 		email: email,
	// 		password: password,
	// 	};
	// 	const loginResult = await login(userData);
	// 	console.log(loginResult)
	// 	if (loginResult) {
	// 		navigate("/home");
	// 	} else {
	// 		navigate("/Register");
	// 	}
	// };

  return (
    <>
    <br />
    <br />
    <div id='requestFormDiv'>
    <Card border='success' id='LoginCard' style={{ width: '30rem', height:'22rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
  <Card.Body>
    <Card.Title>Login</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Please enter email and password</Card.Subtitle>
    <br />
    <Card.Text>
    <Form>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    name='emailAddress'
    placeholder="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Password</Form.Label>
    <Form.Control
    name='password' 
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>

    </Form>
    </Card.Text>

    <a href="/register">Not a member? Register</a>
    <br />
    <Button href="/home" variant='success' style={{backgroundColor:'#046307'}}>Submit</Button>

  </Card.Body>
</Card>
</div>
<br />
<br />              
    </>
  );
}