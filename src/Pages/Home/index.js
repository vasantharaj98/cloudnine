import React, {useState, useEffect} from 'react';
import banner from '../../Assets/Images/Frame_1.png';
import image1 from '../../Assets/Images/image_1.png';
import { Container, Typography } from '@mui/material';
import './style.css';
import { Mainbutton } from '../../Components/Button';
import { SubFooter } from '../../Layouts/Footer';
import Slider2 from '../../Components/Slider';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner_1 from '../../Assets/Images/bg1.jpg';
import banner_2 from '../../Assets/Images/bg2.jpg';
import banner_3 from '../../Assets/Images/bg3.jpg';
import FabButton from '../../Components/fabButton/index';

const Home = ({setSelectid, setMenu}) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false
  };

  return (
    <>
    <FabButton setSelectid={setSelectid} path={'/ourmenu'} value={"Order Now"}/>
    <div className='banner'>
        {/* <img src={banner} className="banner_bg" alt='banner' width="100%" height="100%"></img> */}
        <div>
        <Slider {...settings}>
          <div>
            <img src={banner_1} className="slider_img" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_2} className="slider_img" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_3} className="slider_img" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
        </Slider>
      </div>
        <div className='banner_text'>
            <img src={image1} alt='banner'></img>
            <Typography className='head_text' variant="h" component="h2" sx={{marginTop: 1, width:{sm: "100%", md: "50%"}, lineHeight: 2}}>A great sports bar with excellent food, drinks & an amazing atmosphere!</Typography>
            <Typography className='para' variant="p" component="p" sx={{marginTop:{sm: 1, md: 3}, width:{sm: "100%", md: "50%"}, lineHeight: 2}}><b>Boon Bite</b> is a locally owned upscale sports bar in Ajax, Ontario. We operate a family-friendly restaurant that values quality over anything else. We are well known for our pleasant atmosphere, great food and quality drinks for an affordable price. We also offer party bookings at no additional charge.
            </Typography>
            <div style={{marginTop: 25}}>
              <Link onClick={()=> setSelectid('Our Menu')} to="/ourmenu" style={{textDecoration: 'none'}}>
                  <Mainbutton text="Find out More"/>
              </Link>
            </div>
        </div>
    </div>
    <Container sx={{marginTop: 5}}>
            <Typography className='un_line' variant="h" component="h2">Choose from Wide Varieties of Menu</Typography>
            <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2, marginBottom: 4}}>We're Proud to Serve All Kinds of Dishes Browse Through Our Menu and Find Something For Everyone</Typography>
            <Slider2 setMenu={setMenu} setSelectid={setSelectid}/>
            <div style={{display: 'flex', justifyContent:'center', marginTop: 30}}>
            <Link onClick={()=> setSelectid('Our Menu')} to="/ourmenu" style={{textDecoration: 'none'}}>
                <Mainbutton text="View all Menu"/>
              </Link>
            </div>
    </Container>
    <SubFooter/>
    </>
  )
}

export default Home;
