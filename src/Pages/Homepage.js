import React from "react";
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import ReactPlayer from "react-player";

function Homepage() {
    return(
        <>
        <h1 style={{marginTop:'30px', }}>Welcome to Elite Epoxy!</h1>
        <br />
        <Container id="homeContainer">
      <Row>
        <Col sm={8}>
        <Image className="homeImg" style={{height:'500px'}} src="https://i.imgur.com/mC93ERd.jpg" rounded />
        </Col>
        <Col sm={4}>
        <Card style={{ width: '18rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Title Something</Card.Title>
        <Card.Text>
        Venmo pabst kale chips la croix neutra yr migas scenester cardigan blackbird spyplane viral eiusmod grailed poutine. Solarpunk consectetur succulents, hoodie bushwick ugh cold-pressed migas celiac coloring book cupping laboris chia. Deserunt narwhal lo-fi, reprehenderit heirloom next level raclette blackbird spyplane man bun portland pork belly occaecat excepteur cillum distillery. Selvage sint lo-fi. Glossier commodo fixie, sustainable tofu keytar flannel raclette whatever chambray keffiyeh af est actually duis.
        </Card.Text>
        <Button href="/blogs" variant='success' style={{backgroundColor:'#046307'}}>Blog link</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm={8} xs={4}><Image className="homeImg" src="https://i.imgur.com/ud7cdDr.jpg" rounded /></Col>
        <Col sm={4} xs={2}>        
        <Card style={{ width: '18rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>Something Something Title</Card.Title>
        <Card.Text>
        Shaman cronut pug ut paleo gentrify helvetica sustainable locavore dreamcatcher banjo live-edge dolore tilde. Roof party DSA meditation, truffaut pinterest chartreuse polaroid four dollar toast +1 normcore proident austin voluptate. Letterpress chartreuse stumptown tempor non fashion axe migas anim sus dolore elit pabst deep v chicharrones. Master cleanse semiotics meh etsy trust fund ugh. Hell of affogato etsy live-edge, dreamcatcher eiusmod yuccie jawn et aliqua.
        </Card.Text>
        <Button href="/blogs" variant='success' style={{backgroundColor:'#046307'}}>Blog link</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm={8}><Image className="homeImg" src="https://i.imgur.com/rsD6BuR.jpg" rounded /></Col>
        <Col sm={4}>        
        <Card style={{ width: '18rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Title>More Title Something Something</Card.Title>
        <Card.Text>
        Shaman cronut pug ut paleo gentrify helvetica sustainable locavore dreamcatcher banjo live-edge dolore tilde. Roof party DSA meditation, truffaut pinterest chartreuse polaroid four dollar toast +1 normcore proident austin voluptate. Letterpress chartreuse stumptown tempor non fashion axe migas anim sus dolore elit pabst deep v chicharrones. Master cleanse semiotics meh etsy trust fund ugh. Hell of affogato etsy live-edge, dreamcatcher eiusmod yuccie jawn et aliqua.
        </Card.Text>
        <Button href="/blogs" variant='success' style={{backgroundColor:'#046307'}}>Blog link</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    <br />
    <br />
    <Container id="vidContainer">
    <ReactPlayer url="https://youtu.be/PPCLVVRT_qo" width="1240px" height="640px"/>
    </Container>
    <br />
    <br />
    <div id="contestdiv">
    <Row>
        <Col>
        <Card id="contestCard" style={{ width: '18rem', marginTop:'20%', marginLeft:'100px', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
      <Card.Body>
        <Card.Text>
        Current contest, description of prize
        </Card.Text>
        <Button href="/contest" variant='success' style={{backgroundColor:'#046307'}}>Click here to find out how to win!!</Button>
      </Card.Body>
    </Card></Col>
        <Col><Image className="homeImg" style={{marginLeft:'180px'}} src="https://i.imgur.com/On0G8n6.jpg" rounded /></Col>
    </Row>
    </div>
    <br />
        </>
    )
}

export default Homepage

