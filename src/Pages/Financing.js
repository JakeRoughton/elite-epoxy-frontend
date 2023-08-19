import React, { useState } from "react";
import { Row, Col, Dropdown, Image, Card, Button, Stack } from 'react-bootstrap'


function Financing() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
    const [showC, setShowC] = useState(true);
    
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const toggleShowC = () => setShowC(!showC);

    return (
      <>
      <Row>
        <Col>    
        <Card style={{ width: '24rem', height: '31rem', marginTop:'40px', marginLeft:'100px', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)' }}>
        <Card.Body>
        <Card.Title>Best financing for home improvement customers</Card.Title>
        <Card.Text>
        Austin skateboard +1 tousled, man braid man bun farm-to-table ex. Fam hexagon yuccie next level. Copper mug hashtag pabst wolf anim est occupy fingerstache fanny pack humblebrag flexitarian put a bird on it aesthetic thundercats single-origin coffee. Church-key copper mug beard do, gastropub crucifix blue bottle VHS cornhole microdosing enim aliqua banjo lumbersexual. Mumblecore gluten-free duis green juice truffaut fixie salvia marxism dolor ethical. Humblebrag enamel pin id pickled chia man braid waistcoat qui heirloom adipisicing kombucha. Bodega boys leggings art party, man bun excepteur gluten-free scenester dolor.
        </Card.Text>
        <Button variant='success' style={{backgroundColor:'#046307'}}>Click here</Button>  
      </Card.Body>
    </Card></Col>
        <Col><Image className="homeImg" style={{marginTop:'40px'}} src="https://i.imgur.com/ljcG2x1.png" rounded /></Col>
      </Row>
      <br />
      <br />
      <div className='financingDiv'>
        <div>
            <h3 className="financingMidBanner">20,000</h3>
            <p className="financingMidBanner">Ut dreamcatcher hammock pour-over asymmetrical excepteur id. </p>
        </div>
        <div>
            <h3 className="financingMidBanner">12x</h3>
            <p className="financingMidBanner">Lo-fi excepteur gatekeep normcore semiotics hashtag.</p>
        </div>
        <div>
            <h3 className="financingMidBanner">$450M</h3>
            <p className="financingMidBanner">Voluptate raw denim vape, quinoa pickled blog narwhal mollit.</p>
        </div>
      </div>
    <br />
    <br />
    <h2>WHY PEOPLE LOVE OUR PAYMENT PLAN OPTIONS</h2>
    <br />
    <br />


    <div>
      <Row id='financeRow'>
        <Col>    
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Meditation aute narwhal
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>       
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Green juice you probably haven't heard of them
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>       
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Chicharrones vaporware blog air plant
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      </Row>

      <Row id='financeRow2'>
        <Col>        
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Thundercats, kickstarter put a bird on bitters
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col>        
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Tofu wolf wayfarers
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>        
        <Card style={{ width: '18rem', height: '19rem', boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)', marginBottom:'40px' }}>
      <Card.Img variant="top" src="https://i.imgur.com/zJdUWis.jpg" />
      <Card.Body>
        <Card.Text>
        Cornhole bushwick lo-fi biodiesel
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      </div>

      
    <br />
    <br />
      <h1>How it works in 3 steps</h1>
      <br />
      <br />
    <Row>
      <Col>
      <br />
      <h4 style={{marginTop:'120px'}}>1. Fill out financing application</h4>
      <Button href="/financeApp" variant='success' style={{backgroundColor:'#046307'}}>Click Here</Button>
      <br />
      <br />
      <br />
      <h4>2. 0% introductory APR credit card options for approved homeowners</h4>
      <br />
      <br />
      <h4>3. Get your project funded</h4>
      </Col>
      <Col>
        <Image className="blogImg" src="https://i.imgur.com/GIwyayA.jpg" rounded />
      </Col>
    </Row>
<br />
<br />
<br />
<br />
<br />
    <div>
      <Row>
        <Col><Image className="blogImg" src="https://i.imgur.com/cvWlERB.jpg" rounded /></Col>
        <Col>
        <h3 style={{marginTop:'30px'}}>An affordable payment plan for when you don't have the cash up front</h3>
        <p>8-bit unicorn tbh esse, twee skateboard tofu next level ramps VHS irure keffiyeh anim laboris. Chillwave vice leggings ramps tumeric affogato scenester. Voluptate fixie fit hell of echo park vape hot chicken Brooklyn meh occupy yes plz aliqua JOMO duis adipisicing. Praxis ugh biodiesel, kale chips selvage freegan glossier man braid 3 wolf moon fugiat cupidatat. JOMO church-key austin ut photo booth. Viral shabby chic normcore palo santo food truck. Jawn JOMO typewriter intelligentsia.</p>
        </Col>
      </Row>
    </div>
    <br />
    <br />
    <div className='financingDiv' style={{width:'100%'}}>
        <h1 style={{color:'white'}}>Frequently Asked Questions</h1>
        <br />
        <br />
    </div>
    <Stack gap={3}>
      <div className="p-2">
      <br />
      <Dropdown>
      <Dropdown.Toggle style={{width:'100%', backgroundColor:'#046307', display:'flex', justifyContent:'space-between', alignItems:'center'}} variant="success" id="dropdown-basic">
      How programmers and cats are alike?
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'100%', textAlign:'center'}}>
        <p>They both can sit in the same position for long time and get excited when they find a bug</p>
      </Dropdown.Menu>
    </Dropdown>
      </div>

        <div>
        <Dropdown>
        <Dropdown.Toggle style={{width:'100%', backgroundColor:'#046307', display:'flex', justifyContent:'space-between', alignItems:'center'}} variant="success" id="dropdown-basic">
            What is Forrest Gump's password?
          </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'100%', textAlign:'center'}}>
        <p>1Forrest1</p>
      </Dropdown.Menu>
    </Dropdown>
        </div>

        <div>
         <Dropdown>
         <Dropdown.Toggle style={{width:'100%', backgroundColor:'#046307', display:'flex', justifyContent:'space-between', alignItems:'center'}} variant="success" id="dropdown-basic">
        What is debugging?
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'100%', textAlign:'center'}}>
        <p>Removing the needles from the haystack</p>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <br />
      <br />
    </Stack>
    </>
  );
}

export default Financing