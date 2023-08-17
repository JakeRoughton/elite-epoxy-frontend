import React from "react"
import { Card } from 'react-bootstrap'
import { AiFillFacebook } from 'react-icons/ai';
import { PiInstagramLogoDuotone } from 'react-icons/pi';

function Contact() {
    return(
        <div id='contactDiv'>
        <Card style={{ width: '24rem', maxHeight:'14rem', marginTop:'2rem', marginBottom:'4rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
            <Card.Body>
                <Card.Title>Blake Mendoze</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Epoxy Specialist</Card.Subtitle>
                        <Card.Text>
                        Fingerstache officia meh lo-fi chia. Bicycle fights roof party ea whatever et wolf.
                        </Card.Text>
                    <AiFillFacebook style={{color:'blue'}}/>
                <Card.Link href="#">Link</Card.Link>
                <br />
                <PiInstagramLogoDuotone />
                <Card.Link href="#">Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Contact


