import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dish_1 from '../../Assets/Images/dish_1.png';
import dish_2 from '../../Assets/Images/dish_2.png';
import dish_3 from '../../Assets/Images/dish_3.png';
import dish_4 from '../../Assets/Images/dish_4.png';
import dish_5 from '../../Assets/Images/dish_5.png';
import dish_6 from '../../Assets/Images/dish_6.png';
import dish_7 from '../../Assets/Images/dish_7.png';
import dish_8 from '../../Assets/Images/dish_8.png';
import './style.css'

export default class Responsive extends Component {
    render() {
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="slider_com">
              <img width="100%" height="100%" src={dish_1} alt='dish1'></img>
              <div className="slider_text">
                    <p className="text">Apps & Sharables</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_2} alt='dish2'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish3'></img>
                <div className="slider_text">
                    <p className="text">Pasta</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish4'></img>
                <div className="slider_text">
                    <p className="text">Mains</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_5} alt='dish5'></img>
                <div className="slider_text">
                    <p className="text">Pizza</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish6'></img>
                <div className="slider_text">
                    <p className="text">Bowls & Salads</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish7'></img>
                <div className="slider_text">
                    <p className="text">Sandwish</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <div className="slider_text">
                    <p className="text">Kids Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish4'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_5} alt='dish5'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish6'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish7'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
            </div>
          </Slider>
        </div>
      );
    }
}