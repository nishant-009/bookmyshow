import Carousel from "react-bootstrap/Carousel";

function SliderImage() {
    return(
        <Carousel variant="dark" style={{paddingLeft: "600px", paddingTop: "50px"}}>
        <Carousel.Item>
          <img
            className="d-block w-50" style={{height:"500px", width:"100%"}}
            src="./assets/slider1.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50" style={{width:"100%", height:"500px"}}
            src="./assets/slider2.jpg"
            alt="Second slide"
          />
      
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50" style={{width:"100%", height:"500px"}}
            src="./assets/slider3.jpg"
            alt="Third slide"
          />
      
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
}

export default SliderImage;