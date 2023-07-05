import React from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

function AutoLayoutExample() {
  return (
    <Container style={{marginTop:'30px'}}>
      <Row>
        <Col sm={4} xs={8}>      
        <Card className='blogLeftCards' border="dark" style={{ width: '22rem', height:'31rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)'}}>
        <Card.Body>
        <Card.Title>Metallic finish</Card.Title>
          <Card.Text>
          Street art raw denim 90's id, officia jean shorts tumblr gatekeep jianbing banjo dolore palo santo. Vice voluptate dolore, post-ironic anim 3 wolf moon austin. YOLO 3 wolf moon viral same blog stumptown mukbang flexitarian, wayfarers tilde selvage copper mug pok pok. Blog ugh ut affogato. Cliche green juice bruh in. Lo-fi everyday carry lorem in quis hoodie poke. Fugiat cupidatat vexillologist put a bird on it vegan veniam chartreuse austin keytar kitsch dolor lyft hell of big mood franzen. Man braid schlitz banjo, cupping adaptogen neutral milk hotel tumblr taxidermy pariatur crucifix. Ut dolore vexillologist nisi irony, elit helvetica grailed viral pariatur ad unicorn.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        <Col sm={8} xs={4}>
        <Image className="blogImg" src="https://i.imgur.com/sW373d5.jpg" rounded />
        </Col>
      </Row>
    <br />
    <br />
      <Row>
        <Col sm={8} xs={4}>
        <Image className="blogImg" src="https://i.imgur.com/aN38LA0.jpg" rounded />
        </Col>
        <Col sm={4} xs={8}>        
        <Card border="dark" style={{ width: '22rem', height:'31rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)'}}>
        <Card.Body>
          <Card.Title>Marble finish</Card.Title>
          <Card.Text>
          Forage plaid commodo cloud bread cupidatat thundercats shabby chic try-hard you probably haven't heard of them. Raw denim chartreuse swag excepteur big mood, +1 cred. Gluten-free yuccie lo-fi salvia, veniam blog non bicycle rights ipsum heirloom tbh mlkshk PBR&B. Craft beer aliquip raclette, try-hard vegan meggings ut hashtag hell of flannel before they sold out vibecession adaptogen taxidermy live-edge. Nostrud keffiyeh organic you probably haven't heard of them pour-over stumptown reprehenderit. Vaporware beard mollit poutine flexitarian tempor palo santo vibecession aliqua in four loko tacos.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    <br />
    <br />
      <Row>
        <Col sm={4} xs={8}>        
        <Card className='blogLeftCards' border="dark" style={{ width: '22rem', height:'31rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
        <Card.Body>
          <Card.Title>Flake finish</Card.Title>
          <Card.Text>
          Four loko skateboard tbh synth 3 wolf moon tempor edison bulb, Brooklyn sartorial street art bespoke celiac. Unicorn meggings kogi tonx JOMO mollit. Venmo seitan hashtag nisi church-key live-edge polaroid velit proident ut forage sint solarpunk hammock aliquip. Cred bespoke etsy neutral milk hotel fam humblebrag. Jianbing skateboard in affogato DIY tousled occaecat sunt everyday carry fingerstache selfies hot chicken eiusmod wayfarers. Four dollar toast ugh hammock, retro art party tumblr irony mollit actually affogato occaecat lomo blue bottle deserunt vape. Raw denim hoodie semiotics meggings deserunt.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        <Col sm={8} xs={4}><Image className="blogImg" src="https://i.imgur.com/gLihn2J.jpg" rounded />
        </Col>
      </Row>
    <br />
    <br />
      <Row>
        <Col sm={8} xs={4}><Image className="blogImg" src="https://i.imgur.com/tNGdAaN.jpg" rounded />
        </Col>
        <Col>        
        <Card border="dark" style={{ width: '22rem', height:'31rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
        <Card.Body>
          <Card.Title>Metallic finish</Card.Title>
          <Card.Text>
          Snackwave ugh tousled sed freegan kitsch normcore enamel pin nostrud trust fund reprehenderit chartreuse. Williamsburg kickstarter authentic enim aesthetic thundercats. Meggings jianbing aliquip non VHS prism everyday carry banjo ea. Pitchfork flannel organic, cupidatat shoreditch scenester gochujang enim Brooklyn mixtape. Cloud bread try-hard occaecat big mood knausgaard. Blue bottle cillum gatekeep XOXO lyft, eiusmod stumptown craft beer tofu laboris poutine consectetur mlkshk. In velit plaid beard single-origin coffee farm-to-table yr subway tile.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col sm={4} xs={8}>        
        <Card className='blogLeftCards' border="dark" style={{ width: '22rem', height:'31rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
        <Card.Body>
          <Card.Title>Metallic finish</Card.Title>
          <Card.Text>
          Four loko skateboard tbh synth 3 wolf moon tempor edison bulb, Brooklyn sartorial street art bespoke celiac. Unicorn meggings kogi tonx JOMO mollit. Venmo seitan hashtag nisi church-key live-edge polaroid velit proident ut forage sint solarpunk hammock aliquip. Cred bespoke etsy neutral milk hotel fam humblebrag. Jianbing skateboard in affogato DIY tousled occaecat sunt everyday carry fingerstache selfies hot chicken eiusmod wayfarers. Four dollar toast ugh hammock, retro art party tumblr irony mollit actually affogato occaecat lomo blue bottle deserunt vape. Raw denim hoodie semiotics meggings deserunt.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
        <Col sm={8} xs={4}><Image className="blogImg" src="https://i.imgur.com/LT4zpKA.jpg" style={{height:'450px', width:'550px'}} rounded />
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default AutoLayoutExample;