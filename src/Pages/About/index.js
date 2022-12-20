import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner_1 from '../../Assets/Images/aboutbanner_1.png'

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
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
         <Grid container>
         <Grid item md={12}>
         <div>
        <Slider {...settings}>
          <div>
            <img src={banner_1} alt='banner'></img>
          </div>
          <div>
          <img src={banner_1} alt='banner'></img>
          </div>
          <div>
          <img src={banner_1} alt='banner'></img>
          </div>
          <div>
          <img src={banner_1} alt='banner'></img>
          </div>
        </Slider>
      </div>
        </Grid>
        <Grid item md={12} >
          <Grid item md={12} sx={{padding: 5}}>
          <Typography className='un_line' variant="h" component="h2">About us,</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 4, lineHeight: 2}}>Since opening our first location in Edmonton, Alberta in 1964, Boston Pizza has offered guests two experiences under one roof – a family-friendly casual dining restaurant and a separate sports bar with a lively atmosphere. No matter which side you select, Boston Pizza serves up an extensive menu with more than 100 items to choose from.
            While we’re famous for our gourmet pizzas made with our signature hand pressed dough, our extensive menu satisfies every appetite with our mouth-watering pasta dishes and a wide variety of, salads, entrées and desserts.
          </Typography>
          <Typography variant="p" component="p" sx={{marginTop: 2, lineHeight: 2}}>The casual atmosphere, combined with big-screen high-definition TVs in the sports bar, makes Boston Pizza as fun for families as it is for teams and groups of all ages. Most of our restaurants also feature an outdoor patio for those days when guests want to sit back and soak up the sun.
      </Typography>
      <Typography variant="p" component="p" sx={{marginTop: 2, lineHeight: 2}}>Boston Pizza has more locations, serving more guests annually than any other casual dining concept in the country. Each year, more than 40 million guests are served across more than 380 locations in Canada.
      </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default About;