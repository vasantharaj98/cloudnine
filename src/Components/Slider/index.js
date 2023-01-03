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
import { Link } from "react-router-dom";

export default function Responsive ({setMenu, setSelectid}) {
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

      const handleMenu = (e) =>{
        setMenu(e);
        setSelectid('Our Menu')
      }
      return (
        <div>
          <Slider {...settings}>
            <div className="slider_com">
              <img width="100%" height="100%" src={dish_1} alt='dish1'></img>
              <Link to="/ourmenu" onClick={()=> handleMenu(0)}>
                <div className="slider_text">
                    <p className="text">Salads</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_2} alt='dish2'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(1)}>
                <div className="slider_text">
                    <p className="text">Wings</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish3'></img>
                <Link to="/ourmenu"onClick={()=> handleMenu(2)}>
                <div className="slider_text">
                    <p className="text">Appetizers</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish4'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(3)}>
                <div className="slider_text">
                    <p className="text">Cloud BBQ</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_5} alt='dish5'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(4)}>
                <div className="slider_text">
                    <p className="text">Main</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish6'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(5)}>
                <div className="slider_text">
                    <p className="text">Kids Menu</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish7'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(6)}>
                <div className="slider_text">
                    <p className="text">Classic</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(7)}>
                <div className="slider_text">
                    <p className="text">Sandwiches</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_3} alt='dish4'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(8)}>
                <div className="slider_text">
                    <p className="text">Sides</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_5} alt='dish5'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(9)}>
                <div className="slider_text">
                    <p className="text">Pastas</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish6'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(10)}>
                <div className="slider_text">
                    <p className="text">Burgers</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish7'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(11)}>
                <div className="slider_text">
                    <p className="text">Poutines</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(12)}>
                <div className="slider_text">
                    <p className="text">Wraps</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(13)}>
                <div className="slider_text">
                    <p className="text">Shareables</p>
                </div>
                </Link>
            </div>
            <div className="slider_com">
                <img width="100%" height="100%" src={dish_6} alt='dish8'></img>
                <Link to="/ourmenu" onClick={()=> handleMenu(14)}>
                <div className="slider_text">
                    <p className="text">Desserts</p>
                </div>
                </Link>
            </div>
          </Slider>
        </div>
      );
}