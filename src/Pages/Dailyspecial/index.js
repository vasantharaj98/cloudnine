import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material';
import { Typography } from '@mui/material';
import FabButton from '../../Components/fabButton';
import ImageCard from '../../Components/ImageCard';
import daily_1 from '../../Assets/Images/daily_1.png';
import daily_2 from '../../Assets/Images/daily_2.png';
import daily_3 from '../../Assets/Images/daily_3.png';
import daily_4 from '../../Assets/Images/daily_4.png';
import daily_5 from '../../Assets/Images/daily_5.png';
import daily_6 from '../../Assets/Images/daily_6.png';
import daily_7 from '../../Assets/Images/daily_7.png';


const itemData = [
  {
    img: daily_3,
    title: 'Breakfast',
  },
  {
    img: daily_1,
    title: 'Burger',
  },
  {
    img: daily_2,
    title: 'Camera',
  },
  {
    img: daily_4,
    title: 'Coffee',
  },
  {
    img: daily_5,
    title: 'Hats',
  },
  {
    img: daily_6,
    title: 'Honey',
  },
  {
    img: daily_7,
    title: 'Basketball',
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