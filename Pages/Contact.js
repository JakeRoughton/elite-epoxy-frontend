import React from "react"
import { Card } from 'react-bootstrap'

function Contact() {
    return(
        <div id='contactDiv'>
        <Card style={{ width: '24rem', maxHeight:'14rem', marginTop:'2rem', marginBottom:'4rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
            <Card.Body>
                <Card.Title>Blake Mendoze</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Epoxy Specialist</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Contact