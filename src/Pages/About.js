import React from "react";
import { Row, Col, Image, Card } from 'react-bootstrap'

function About() {
    return(
        <div id='aboutDiv'>
        <Row style={{marginTop:'30px'}}>
            <Col>    
            <Card id='aboutCard' className='cardColor'style={{ width: '22rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
                <Card.Body className="cardBody">
                    <Card.Title>About Elite Epoxy</Card.Title>
                    <Card.Text>
                    I would like to take this opportunity to introduce myself. My name is Blake Mendoza, and I am a busy father of 2. To support my family, I'm the owner of Elite Epoxy. Established in 2017 The company is new in the Epoxy business, and is building business by delivering superior quality craftsmanship and taking excellent care of customers. 
                    I'd love to provide a comprehensive estimate to try to earn your business. I would also like to offer a free inspection on all floor work. We know you have a lot of options when it comes to selecting a contractor to perform the necessary work. There is a lot more that goes into a good job besides the materials installed. Ultimately, you will have to select a contractor whom you feel comfortable with that can actually deliver what they are promising. Our company is making a track record of success that stands for itself. 
                    We feel we have the highest quality professional installation crews in the business, and also have a list of satisfied customers on a reference list I can provide. 
                    </Card.Text>
                </Card.Body>
            </Card></Col>
            <Col>
                <Image className="homeImg" src="https://i.imgur.com/Yy5Xbpq.jpg" rounded />
                <Image className="homeImg" src="https://i.imgur.com/qr0Rgf8.jpg" style={{marginTop:'30px', marginBottom:'100px'}} rounded />
            </Col>
        </Row>
        <br />
        <br />
        </div>
    )
}

export default About