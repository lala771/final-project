import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"



const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero">
      <Slider {...sliderSettings}>
        <div>
          <img src="https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" hig/>
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/a6/d5/77/a6d577b4725a80630cc5045091b3d987.jpg" height={856}  alt="Slide 2" />
        </div>
        <div>
          <img src="https://i.pinimg.com/236x/8c/4f/e1/8c4fe18064031296bc8e0506ed2836ff.jpg" height={856}  alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
