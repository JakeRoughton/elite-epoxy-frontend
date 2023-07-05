import React, { useState } from 'react';
import { Col, Button, Row, Card, Form } from "react-bootstrap";

const RequestFormCustom = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [comments, setComments] = useState('')

    

    return(
        <>
        <br />
        <div id='requestFormDiv'>
        <Card border='success' id='requestFormCard' style={{ width: '30rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Custom Request Form</Card.Title>

        <Card.Text>
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
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type='text'
        placeholder="1234 Main St" 
        name='addressOne'
        value={addressOne} 
        onChange={(e) => setAddressOne(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control 
        type='text'
        placeholder="Apartment, studio, or floor" 
        name='AddressTwo'
        value={addressTwo} 
        onChange={(e) => setAddressTwo(e.target.value)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
          type='text'
          placeholder='City'
          name='city'
          value={city}
          onChange={(e)=> setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
                    type='text'
                    placeholder='Zip'
                    name='zip'
                    value={zip}
                    onChange={(e)=> setZip(e.target.value)}
          />
        </Form.Group>
      </Row>
        </Form>
        </Card.Text>

        <Form.Group className="mb-3" controlId="formGridComments">
        <Form.Label>Comments</Form.Label>
        <Form.Control 
        type='text'
        placeholder="Any special requests" 
        name='comments'
        value={comments}
        onChange={(e)=> setComments(e.target.value)}
        />
        </Form.Group>

        <Button href="/submit" variant="success">Submit</Button>

      </Card.Body>
    </Card>
    </div>
    <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </>
    )
}


export default RequestFormCustom