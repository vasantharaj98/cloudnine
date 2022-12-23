import React from 'react'
import { SubFooter } from '../../Layouts/Footer';
import { Button, Container } from '@mui/material';
import { Typography } from '@mui/material';
import {ShoppingCartOutlined} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import Tabs from '../../Components/Tabs/index'

const Menu = () => {
  return (
    <>
    <Container sx={{marginTop: 13}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
      <Typography className='un_line' variant="h" component="h2">Choose from Wide Varieties of Menu</Typography>
      <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Typography>
      </div>
      <div>
        <Button sx={{color: '#000', textTransform: 'none'}}>
        <Typography variant="p" component="h3" sx={{marginRight: 1}}> Cart</Typography>
        <Badge color="primary" badgeContent={0} showZero>
        <ShoppingCartOutlined sx={{color: '#DB241E'}}></ShoppingCartOutlined>
      </Badge>  </Button>
      </div>
      </div>
      <Tabs/>
    </Container>
    <SubFooter/>
    </>
  )
}

export default Menu;