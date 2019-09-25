import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectsCarousel() {
return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100" width={300} height={100}
        src="images/Localmotion.png"
        alt="Localmotion"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" width={300} height={100}
        src="images/clicky-game.png"
        alt="Third slide"
      />
      <Carousel.Caption>
          <h4>Testing</h4>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100" width={300} height={100}
        src="images/Friends_Trivia.png"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
)
};

export default ProjectsCarousel;