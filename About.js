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
                    Heirloom ut sartorial, fixie meditation ex palo santo 8-bit fugiat meh af gluten-free gentrify affogato yr. Snackwave commodo distillery enamel pin mustache. La croix proident incididunt dolore anim, chartreuse polaroid artisan shoreditch deep v raw denim. Food truck retro cardigan, dolore qui DIY marxism laboris cillum kogi quinoa stumptown selfies pickled. Lo-fi readymade anim, pabst ennui photo booth tattooed schlitz hot chicken 8-bit eu mukbang aesthetic. Hell of snackwave yuccie chartreuse hexagon art party, chicharrones fit adaptogen readymade freegan beard meh banh mi. Whatever proident microdosing, hot chicken trust fund mollit copper mug salvia. Unicorn semiotics aliqua aute gentrify DIY. IPhone dolor cardigan jean shorts sartorial velit. Humblebrag vaporware paleo ascot pork belly crucifix art party iceland sartorial tumeric quis jawn single-origin coffee. 
                    <br />
                    <br /> 
                    Cred seitan mukbang magna mlkshk jean shorts marfa. 8-bit do cold-pressed roof party, solarpunk yr iPhone hot chicken slow-carb ut put a bird on it. Offal single-origin coffee street art everyday carry, occaecat synth magna palo santo chia aliqua bitters dolore chillwave ex sed. Gatekeep messenger bag praxis ea, kinfolk cloud bread blackbird spyplane dreamcatcher disrupt paleo kickstarter direct trade. Aesthetic craft beer salvia pop-up green juice narwhal polaroid. Laborum sriracha edison bulb, disrupt art party whatever jawn kinfolk occaecat. Mustache flannel PBR&B marfa distillery non.
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