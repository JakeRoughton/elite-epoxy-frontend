import React, { useState } from 'react';
import { Col, Button, Row, Card, Form } from "react-bootstrap";

const RequestForm = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [comments, setComments] = useState('')
    
    const onStateChange = e => {
      setState(e.target.value)
    }

    return(
        <>
        <br />
        <div id='requestFormDiv'>
        <Card border='success' id='requestFormCard' style={{ width: '30rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Standard Request Form</Card.Title>

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
          <option>Choose State...</option>
          <option 
            value='alaska'
            label='Alaska'
            name='alaska'
            id='alaska'
            checked={state === 'alaska'}
            onChange={onStateChange}
          >Alaska</option>

			    <option 
            value='alabama'
            label='Alabama'
            name='alabama'
            id='alabama'
            checked={state === 'alabama'}
            onChange={onStateChange}
          >Alabama</option>

          <option
            value='arkansas'
            label='Arkansas'
            name='arkansas'
            id='arkansas'
            checked={state === 'arkansas'}
            onChange={onStateChange}

           >Arkansas</option>

          <option
            value='arizona'
            label='Arizona'
            name='arizona'
            id='arizona'
            checked={state === 'arizona'}
            onChange={onStateChange}
           
           >Arizona</option>

          <option
            value='california'
            label='California'
            name='california'
            id='california'
            checked={state === 'california'}
            onChange={onStateChange}

           >California</option>

          <option
            value='colorado'
            label='Colorado'
            name='colorado'
            id='colorado'
            checked={state === 'colorado'}
            onChange={onStateChange}

           >Colorado</option>

          <option
            value='connecticut'
            label='Connecticut'
            name='connecticut'
            id='connecticut'
            checked={state === 'connecticut'}
            onChange={onStateChange}

           >Connecticut</option>

          <option
            value='districtOfColumbia'
            label='District of Columbia'
            name='districtOfColumbia'
            id='districtOfColumbia'
            checked={state === 'districtOfColumbia'}
            onChange={onStateChange}
           
           >District of Columbia</option>

          <option
            value='delaware'
            label='Delaware'
            name='delaware'
            id='delaware'
            checked={state === 'delaware'}
            onChange={onStateChange}
           
           >Delaware</option>

          <option
            value='florida'
            label='Florida'
            name='florida'
            id='florida'
            checked={state === 'florida'}
            onChange={onStateChange}
           
           >Florida</option>
          
          <option
          value='georgia'
          label='Georgia'
          name='georgia'
          id='georgia'
          checked={state === 'georgia'}
          onChange={onStateChange}
          
          >Georgia</option>

          <option
            value='hawaii'
            label='Hawaii'
            name='hawaii'
            id='hawaii'
            checked={state === 'hawaii'}
            onChange={onStateChange}
           
           >Hawaii</option>

          <option 
            value='iowa'
            label='Iowa'
            name='iowa'
            id='iowa'
            checked={state === 'iowa'}
            onChange={onStateChange}
          
          >Iowa</option>

          <option 
            value='idaho'
            label='Idaho'
            name='idaho'
            id='idaho'
            checked={state === 'idaho'}
            onChange={onStateChange}
          
          >Idaho</option>

          <option 
            value='illinois'
            label='Illinois'
            name='illinois'
            id='illinois'
            checked={state === 'illinois'}
            onChange={onStateChange}
          
          >Illinois</option>

          <option 
            value='indiana'
            label='Indiana'
            name='indiana'
            id='indiana'
            checked={state === 'indiana'}
            onChange={onStateChange}
          
          >Indiana</option>

          <option 
            value='kansas'
            label='Kansas'
            name='kansas'
            id='kansas'
            checked={state === 'kansas'}
            onChange={onStateChange}
           
           >Kansas</option>

          <option
            value='kentucky'
            label='Kentucky'
            name='kentucky'
            id='kentucky'
            checked={state === 'kentucky'}
            onChange={onStateChange}
           
           >Kentucky</option>

          <option
            value='louisiana'
            label='Louisiana'
            name='louisiana'
            id='louisiana'
            checked={state === 'louisiana'}
            onChange={onStateChange}
           
           >Louisiana</option>

          <option
            value='massachusetts'
            label='Massachusetts'
            name='massachusetts'
            id='massachusetts'
            checked={state === 'massachusetts'}
            onChange={onStateChange}
          
          >Massachusetts</option>

          <option
            value='maryland'
            label='Maryland'
            name='maryland'
            id='maryland'
            checked={state === 'maryland'}
            onChange={onStateChange}
           
           >Maryland</option>

          <option
            value='maine'
            label='Maine'
            name='maine'
            id='maine'
            checked={state === 'maine'}
            onChange={onStateChange}
           
           >Maine</option>

          <option
            value='michigan'
            label='Michigan'
            name='michigan'
            id='michigan'
            checked={state === 'michigan'}
            onChange={onStateChange}
           
           >Michigan</option>

          <option
            value='minnesota'
            label='Minnesota'
            name='minnesota'
            id='minnesota'
            checked={state === 'minnesota'}
            onChange={onStateChange}
           
           >Minnesota</option>

          <option
            value='missouri'
            label='Missouri'
            name='missouri'
            id='missouri'
            checked={state === 'missouri'}
            onChange={onStateChange}
          
          >Missouri</option>

          <option
            value='mississippi'
            label='Mississippi'
            name='mississippi'
            id='mississippi'
            checked={state === 'mississippi'}
            onChange={onStateChange}
           
           >Mississippi</option>

          <option
            value='montana'
            label='Montana'
            name='montana'
            id='montana'
            checked={state === 'montana'}
            onChange={onStateChange}
           
           >Montana</option>

          <option
            value='north carolina'
            label='North Carolina'
            name='north carolina'
            id='north carolina'
            checked={state === 'north carolina'}
            onChange={onStateChange}
           
           >North Carolina</option>

          <option
            value='north dakota'
            label='North Dakota'
            name='north dakota'
            id='north dakota'
            checked={state === 'north dakota'}
            onChange={onStateChange}
           
           >North Dakota</option>

          <option
            value='nebraska'
            label='Nebraska'
            name='nebraska'
            id='nebraska'
            checked={state === 'nebraska'}
            onChange={onStateChange}
           
           >Nebraska</option>

          <option
            value='new hampshire'
            label='New Hampshire'
            name='new hampshire'
            id='new hampshire'
            checked={state === 'new hampshire'}
            onChange={onStateChange}
          
          >New Hampshire</option>

          <option
            value='new jersey'
            label='New Jersey'
            name='new jersey'
            id='new jersey'
            checked={state === 'new jersey'}
            onChange={onStateChange}
           
           >New Jersey</option>

          <option
            value='new mexico'
            label='New Mexico'
            name='new mexico'
            id='new mexico'
            checked={state === 'new mexico'}
            onChange={onStateChange}
           
           >New Mexico</option>
          <option
            value='nevada'
            label='Nevada'
            name='nevada'
            id='nevada'
            checked={state === 'nevada'}
            onChange={onStateChange}
           
           >Nevada</option>

          <option
            value='new york'
            label='New York'
            name='new york'
            id='new york'
            checked={state === 'new york'}
            onChange={onStateChange}
           
           >New York</option>

          <option
            value='ohio'
            label='Ohio'
            name='ohio'
            id='ohio'
            checked={state === 'ohio'}
            onChange={onStateChange}
           
           >Ohio</option>

          <option
            value='oklahoma'
            label='Oklahoma'
            name='oklahoma'
            id='oklahoma'
            checked={state === 'oklahoma'}
            onChange={onStateChange}
          
          >Oklahoma</option>

          <option
            value='oregon'
            label='Oregon'
            name='oregon'
            id='oregon'
            checked={state === 'oregon'}
            onChange={onStateChange}
          
          >Oregon</option>

          <option
            value='pennsylvania'
            label='Pennsylvania'
            name='pennsylvania'
            id='pennsylvania'
            checked={state === 'pennsylvania'}
            onChange={onStateChange}
           
           >Pennsylvania</option>

          <option
            value='rhode island'
            label='Rhode Island'
            name='rhode island'
            id='rhode island'
            checked={state === 'rhode island'}
            onChange={onStateChange}
           
           >Rhode Island</option>

          <option
            value='south carolina'
            label='South Carolina'
            name='south carolina'
            id='south carolina'
            checked={state === 'south carolina'}
            onChange={onStateChange}
           
           >South Carolina</option>

          <option
            value='south dakota'
            label='South Dakota'
            name='south dakota'
            id='south dakota'
            checked={state === 'south dakota'}
            onChange={onStateChange}
           
           >South Dakota</option>

          <option
            value='tennessee'
            label='Tennessee'
            name='tennessee'
            id='tennessee'
            checked={state === 'tennessee'}
            onChange={onStateChange}
           
           >Tennessee</option>

          <option
            value='texas'
            label='Texas'
            name='texas'
            id='texas'
            checked={state === 'texas'}
            onChange={onStateChange}
           
           >Texas</option>

          <option
            value='utah'
            label='Utah'
            name='utah'
            id='utah'
            checked={state === 'utah'}
            onChange={onStateChange}
           
           >Utah</option>

          <option
            value='virginia'
            label='Virginia'
            name='virginia'
            id='virginia'
            checked={state === 'virginia'}
            onChange={onStateChange}

          >Virginia</option>

          <option
            value='vermont'
            label='Vermont'
            name='vermont'
            id='vermont'
            checked={state === 'vermont'}
            onChange={onStateChange}
          
          >Vermont</option>

          <option
            value='washington'
            label='Washington'
            name='washington'
            id='washington'
            checked={state === 'washington'}
            onChange={onStateChange}
            
           >Washington</option>

          <option
            value='wisconsin'
            label='Wisconsin'
            name='wisconsin'
            id='wisconsin'
            checked={state === 'wisconsin'}
            onChange={onStateChange}
           
           >Wisconsin</option>

          <option
            value='west virginia'
            label='West Virginia'
            name='west virginia'
            id='west virginia'
            checked={state === 'west virginia'}
            onChange={onStateChange}
           
           >West Virginia</option>

          <option 
            value='wyoming'
            label='Wyoming'
            name='wyoming'
            id='wyoming'
            checked={state === 'wyoming'}
            onChange={onStateChange}
           
           >Wyoming</option>
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
        placeholder="Details about order" 
        name='comments'
        value={comments}
        onChange={(e)=> setComments(e.target.value)}
        />
        </Form.Group>

        <Button href="/submit" variant="success">Submit</Button>

      </Card.Body>
    </Card>
    </div>
    
    <br/>                                                              
        </>
    )
}


export default RequestForm

