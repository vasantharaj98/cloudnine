import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import FabButton from '../../Components/fabButton';

const Menu = ({setSelectid}) => {

  return (
    <>
    <FabButton setSelectid={setSelectid} path={'/ourmenu'} value={"Order Now"}/>
    <Container sx={{marginTop: 20, display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography variant="h" component="h2">Daily Special</Typography>
    </Container>
    </>
  )
}

export default Menu;