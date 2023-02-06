import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

const Menu = () => {

  return (
    <>
    <Container sx={{marginTop: 13, display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography variant="h" component="h2">Daily Special</Typography>
    </Container>
    </>
  )
}

export default Menu;