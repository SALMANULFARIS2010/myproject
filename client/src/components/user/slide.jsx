import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from '../picture/alesia-kaz-XLm6-fPwK5Q-unsplash.jpg';
import img2 from '../picture/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import img3 from '../picture/christian-mackie-lDlU1zbjGQA-unsplash.jpg';
// import img3 from '../images/mario-gogh-VBLHICVh-lI-unsplash.jpg';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slider" /> */}
        <img src={img1} style={{width:"100%", height:"500px"}}/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img2} style={{width:"100%", height:"500px"}}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img3} style={{width:"100%", height:"500px"}}/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;