import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material';
import { Typography } from '@mui/material';
import FabButton from '../../Components/fabButton';
import ImageCard from '../../Components/ImageCard';
import daily_1 from '../../Assets/Images/mon.jpeg';
import daily_2 from '../../Assets/Images/tue.jpeg';
import daily_3 from '../../Assets/Images/wed.jpeg';
import daily_4 from '../../Assets/Images/daily_4.png';
import daily_5 from '../../Assets/Images/fri.jpeg';
import daily_6 from '../../Assets/Images/sat.jpeg';
import daily_7 from '../../Assets/Images/sun.jpeg';
import daily_8 from '../../Assets/Images/game_night.jpeg';


const itemData = [
  {
    img: daily_1,
    title: 'Monday',
  },
  {
    img: daily_2,
    title: 'Tuesday',
  },
  {
    img: daily_3,
    title: 'Wednesday',
  },
  {
    img: daily_5,
    title: 'Friday',
  },
  {
    img: daily_6,
    title: 'Saturday',
  },
  {
    img: daily_7,
    title: 'Sunday',
  },
  {
    img: daily_8,
    title: 'Game Nught',
  }
];

const Menu = ({setSelectid}) => {

  return (
    <>
    <FabButton setSelectid={setSelectid} path={'/ourmenu'} value={"Order Now"}/>
    <Container sx={{marginTop: 20}}>
    <Box
                sx={{
                width: "100%",
                height: "100%",
                marginTop: 2,
                backgroundColor: '#080808',
                padding: 3,
                color: '#fff'
      }}
    >
        <Typography className='un_line' variant="h" component="h2">Daily Special</Typography>
        <div style={{marginTop: 50}}>
            <ImageCard itemData={itemData}/>
        </div>
    </Box>
    </Container>
    </>
  )
}

export default Menu;