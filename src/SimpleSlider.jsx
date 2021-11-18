import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../src/images/banner.png';
import banner1 from '../src/images/banner1.png';
import banner2 from '../src/images/banner2.png';
export default function SimpleSlider(){
    var Settings = {
        dots : true,
        infinite : true,
        arrow : true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow : 1,
        slidesToScroll : 1, 
    };
    return (
        <Slider{...Settings}>
        <div>
        <img src = {banner} className= "img-fluid" alt = "HomeBanner"/>
      </div>
      <div>
        <img src = {banner1} className= "img-fluid" alt = "HomeBanner1"/>
      </div>
      <div>
        <img src = {banner2} className= "img-fluid" alt = "HomeBanner2"/>
      </div>
        </Slider>
    );
}