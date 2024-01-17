import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  return (
    <div>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.vecteezy.com/system/resources/previews/000/344/684/original/programming-code-on-laptop-banner-vector-flat-illustration.jpg"  // Replace with your image URL
              alt="First slide"
            />
            
            <Carousel.Caption>
              <h3 style={{color:'Brown'}}>Unlock a Year Of Unlimited Learning </h3>
              <p style={{color:'Brown'}}>Get access of +250 Courses,Just <span style={{color:'green'}}>Rs10/Course!</span></p>
              <Button variant="primary mt-2" style={{marginRight:'2rem'}}>Get Started</Button>
              <Button variant="outline-primary mt-2">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.vecteezy.com/system/resources/previews/004/648/844/non_2x/wireframe-of-geometric-binary-code-polygonal-design-low-poly-digital-illustration-light-connection-structure-of-modern-graphics-futuristic-concept-for-programming-binary-languages-vector.jpg"  // Replace with your image URL
              alt="First slide"
            />
            
            <Carousel.Caption>
            <h3 style={{color:'white'}}>Unlock a Year Of Unlimited Learning </h3>
              <p style={{color:'white'}}>Get access of +250 Courses,Just <span style={{color:'yellow'}}>Rs10/Course!</span></p>
              <Button variant="primary mt-2" style={{marginRight:'2rem'}}>Get Started</Button>
              <Button variant="outline-primary mt-2">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}

export default Header;
