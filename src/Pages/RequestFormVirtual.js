import React, { useState } from 'react';
import { Col, Button, Row, Card, Form } from "react-bootstrap";

const RequestFormVirtual = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [platform, setPlatform] = useState('')
    const [time, setTime] = useState('')
    const [timeZone, setTimeZone] = useState('')
    const [comments, setComments] = useState('')


    const onOptionChange = e => {
      setPlatform(e.target.value)
    }
    
    const onTimeChange = e => {
      setTime(e.target.value)
    }

    const onTimeZoneChange = e => {
      setTimeZone(e.target.value)
    }

    return(
        <>
        <br />
        <div id='requestFormDiv'>
        <Card border='success' id='requestFormCard' style={{ width: '30rem', height:'38rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Inspection Request Form</Card.Title>

        <Card.Text>
        <Form>
      <Row className="mb-3">
        <Col>
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
        </Col>
        <Col className="mb-3">
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
        </Col>
       </Row>

       <Row>
        <Col className="mb=3">
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
        </Col>
      </Row>
      <br />

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={6} >
            Preferred video platform
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              value='facetime'
              type="radio"
              label="Face Time"
              name="formHorizontalRadios"
              id="facetime"
              checked={platform === "facetime"}
              onChange={onOptionChange}
            />
            <Form.Check
              value="zoom"
              type="radio"
              label="Zoom"
              name="formHorizontalRadios"
              id="zoom"
              checked={platform === "zoom"}
              onChange={onOptionChange}
            />
            <Form.Check
              value="googleDuo"
              type="radio"
              label="Google Duo"
              name="formHorizontalRadios"
              id="googleDuo"
              checked={platform === "googleDuo"}
              onChange={onOptionChange}
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Row className="mb-3">


        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Morning or afternoon</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option
            value='morning'
            label='Morning'
            id='morning'
            checked={time === 'morning'}
            onChange={onTimeChange}
            ></option>
            <option
            value='afternoon'
            label='Afternoon'
            id='afternoon'
            checked={time === 'afternoon'}
            onChange={onTimeChange}
            >P.M.</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Timezone</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option
              value='central'
              label='Central'
              id='central'
              checked={timeZone === 'central'}
              onChange={onTimeZoneChange}
            >Central</option>
            <option
              value='timezone'
              label='Pacific'
              name='pacific'
              id='pacific'
              checked={timeZone === 'pacific'}
              onChange={onTimeZoneChange}
            >Pacific</option>
            <option
              value='timezone' 
              label='Mountain'
              name='mountain'
              id='mountain'
              checked={timeZone === 'mountain'}
              onChange={onTimeZoneChange}>Mountain</option>
            <option   
              value='timezone'
              label='Eastern'
              name='eastern'
              id='eastern'
              checked={timeZone === 'eastern'}
              onChange={onTimeZoneChange}>Eastern</option>
          </Form.Select>
        </Form.Group>

      </Row>
        </Form>
        </Card.Text>

        <Form.Group className="mb-3" controlId="formGridComments">
        <Form.Label>Comments</Form.Label>
        <Form.Control 
        label='comments'
        placeholder="Any information about inspection"
        name='comments'
        value={comments} 
        id='comments'
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