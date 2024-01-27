import './App.css';
import React from 'react';
// Importing react components from react bootstrap
import {Card,Navbar,Carousel,Button,NavDropdown,Nav,Container, Row,Col,Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
        <Navbar expand="lg" className="black-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mousalsel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romantic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Humor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br></br><br></br><br></br><br></br>
      {/* Slides Showing upcoming movies  */}
    
 <Carousel data-bs-theme="dark">
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705174117/catalog/1324485230070534144/pwpoaolevsnua1t5uxlm.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Comming soon</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.moviepostershop.com/images/slideshow/new-releases.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Comming soon</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.kwork.com/files/portfolio/t0/81/5aa13cf8fdfa789187fffca5dc3167d716822319-1677508471.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Comming soon</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <br></br><br></br><br></br><br></br>
{/* Cards for movies to watch */}

<Container style={{marginRight:'10px'}}>
  <Row>
    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg" />
      <Card.Body>
        <Card.Title>Avatar</Card.Title>
        <Card.Text>
        Avatar is an American media franchise created by James Cameron, 
        which consists of a planned series of epic science fiction films 
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg" />
      <Card.Body>
        <Card.Title>StarWars</Card.Title>
        <Card.Text>
        Star Wars is an American epic space opera media franchise created by George Lucas
        , which began with the eponymous 1977
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg" />
      <Card.Body>
        <Card.Title>Spider-man</Card.Title>
        <Card.Text>
        It is the sequel to Spider-Man: Into the Spider-Verse (2018), 
        set in a shared multiverse of alternate universes called the Spider-Verse
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>


<Form style={{width: '20em', marginLeft: '33em', marginTop: '5em', marginBottom: '5em'}}>
  <h3>Contact us</h3>
  <br></br>

  {/* Bootstrap Contact us form  */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Write us</Form.Label>
        <Form.Control type="text"  style={{width:'20em', height:'10em'}} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>
  );
}

export default App;

