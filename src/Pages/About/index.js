import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner_1 from '../../Assets/Images/cloud1.JPG';
import banner_2 from '../../Assets/Images/cloud2.JPG';
import banner_3 from '../../Assets/Images/cloud3.jpeg';
import banner_4 from '../../Assets/Images/cloud4.jpeg';
import banner_5 from '../../Assets/Images/cloud5.jpeg';
import banner_6 from '../../Assets/Images/cloud6.jpeg';
import banner_7 from '../../Assets/Images/cloud7.jpeg';
import './style.css';

const About = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false
  };
  return (
    <Container sx={{marginTop: 13}}>
    <Box
                sx={{
                width: "100%",
                height: "100%",
                backgroundColor: '#1F1A17',
                color: '#fff'
      }}
    >
         <div>
        <Slider {...settings}>
          <div>
            <img src={banner_1} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_2} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_3} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_4} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_5} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_6} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
          <div>
          <img src={banner_7} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </div>
        </Slider>
      </div>
        <Grid container>
        <Grid item md={12} >
          <Grid item md={12} sx={{padding: 5}}>
          <Typography className='un_line' variant="h" component="h2">About us,</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 4, lineHeight: 2}}>Our NEW Fall Menu has something everyone will love. Our chefs have taken classic dishes and added a unique twist. We are a great sports bar with excellent food, drinks, and an amazing atmosphere. Our mission is to provide our guests with a fun and enjoyable dining experience. We offer a wide variety of menu items, including appetizers, entrees, desserts, and beverages. Our friendly and knowledgeable staff is here to help you choose the perfect meal or drink for your needs. Thank you for choosing us as your dining destination. Come join us at Cloud Nine to experience all the deliciousness that our menu has to offer.
          </Typography>
          {/* <Typography variant="p" component="p" sx={{marginTop: 2, lineHeight: 2}}>The casual atmosphere, combined with big-screen high-definition TVs in the sports bar, makes Boston Pizza as fun for families as it is for teams and groups of all ages. Most of our restaurants also feature an outdoor patio for those days when guests want to sit back and soak up the sun.
      </Typography>
      <Typography variant="p" component="p" sx={{marginTop: 2, lineHeight: 2}}>Boston Pizza has more locations, serving more guests annually than any other casual dining concept in the country. Each year, more than 40 million guests are served across more than 380 locations in Canada.
      </Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default About;