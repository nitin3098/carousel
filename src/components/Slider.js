import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import  Carousel from 'react-bootstrap/Carousel';
 import Card from 'react-bootstrap/Card'
 import CardGroup from 'react-bootstrap/CardGroup'
 import Pic from '../pic.png';
 

function Slider() {
    return (
        <div>
            <h1>CARD CAROUSEL </h1>
            <Carousel>
  <Carousel.Item>
  <CardGroup >
      
  <Card >
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>IBPS PO & SBI PO Live Coaching in English</Card.Title>
     
    </Card.Body>
    <Card.Footer >
      <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
 
  <Card >
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>CIVIL JUNIOR ENGINEER Live English Batch</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>UPSC CDS-LIVE COACHING</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </Carousel.Item>
  <Carousel.Item>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>CIVIL JUNIOR ENGINEER Live English Batch</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>UPSC CDS-LIVE COACHING</Card.Title>
      
      
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pic} />
    <Card.Body>
      <Card.Title>IBPS PO & SBI PO Live Coaching in English</Card.Title>
      
      
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">240+ QUESTIONS</small><br></br>
      <small className="text-muted">200+ CLASSES</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}

export default Slider
