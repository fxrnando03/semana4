import Carousel from 'react-bootstrap/Carousel';
import pato from './pato.jpg';
import pato2 from './pato2.jpg'


const Main = () => {
    return <main>
            <img
            className="d-block w-100"
            src={pato}
            alt="First slide"
            /> 

            <img
            className="d-block w-100"
            src={pato2}
            alt="First slide"
            /> 
        <Carousel fade>
      <Carousel.Item>
        <pato text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <pato text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <pato text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </main>;
}

export default Main;