import React, { useState } from 'react';
import { Col, Button, Row, Card, Form } from "react-bootstrap";

const RequestFormVirtual = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    
    return(
        <>
        <br />
        <div id='requestFormDiv'>
        <Card border='success' id='requestFormCard' style={{ width: '30rem', height:'32rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Inspection Request Form</Card.Title>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control 
          type="text"
          placeholder="Enter first name" 
          name='firstName'
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter last name" 
          name='lastName'
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Email" 
          name='email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={6} >
            Preferred video platform
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="FaceTime"
              name="formHorizontalRadios"
              id="radio1"
            />
            <Form.Check
              type="radio"
              label="Zoom"
              name="formHorizontalRadios"
              id="Radio2"
            />
            <Form.Check
              type="radio"
              label="Google Duo"
              name="formHorizontalRadios"
              id="Radio3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Row className="mb-3">


        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Morning or afternoon</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>A.M.</option>
            <option>P.M.</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Timezone</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Central</option>
            <option>Pacific</option>
            <option>Mountain</option>
            <option>Eastern</option>
          </Form.Select>
        </Form.Group>

      </Row>
        </Form>

        <Form.Group className="mb-3" controlId="formGridComments">
        <Form.Label>Comments</Form.Label>
        <Form.Control 
        placeholder="Comments"
        name='comments'
        value={comments} 
        onChange={(e) => setComments(e.target.value)} 
        />
        </Form.Group>

        <Button href="/submit" variant="success">Submit</Button>

      </Card.Body>
    </Card>
    <br />
    <br />
    </div>
    <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </>
    )
}


export default RequestFormVirtual