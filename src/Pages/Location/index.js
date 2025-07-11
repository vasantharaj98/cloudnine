import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography, Link } from '@mui/material';
import {FmdGoodOutlined, LocalPhoneOutlined} from '@mui/icons-material';
import FabButton from '../../Components/fabButton';

const Location = ({setSelectid}) => {
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
         <Grid container spacing={2}>
         <Grid item md={12}>
        <iframe src="https://www.google.com/maps/embed?m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dfa401678975%3A0xbd54d5f97074a11!2sCLOUD%20NINE%20BAR%20%26GRILL!5e0!3m2!1sen!2sin!4v1673412721486!5m2!1sen!2sin" width="100%" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
        <Grid item md={12}>
          <Grid item md={12}>
          <Typography className='un_line' variant="h" component="h2">Locate us,</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 4, lineHeight: 2}}>You can visit our restaurant by locating us through google map. Happy Visiting!</Typography>
          </Grid>
          <Grid item md={12}>
          <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20, marginTop: 15, flexWrap: 'wrap'  }}>
          <div>
            <Link href='https://goo.gl/maps/JZtXWi1vxqujv6kKA' target="_blank" sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#fff'}}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>Boon Bite BAR & GRILL 368 Bayly St W, Ajax, ON L1S 1P1, Canada</Typography>
            </Link>
            </div>
            <div>
            <Link href='tel: +190590678687' sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#fff'}}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+190578678576</Typography>
            </Link>
            </div>
        </div>
          </Grid>
          <Grid item md={12} sx={{marginTop: 4}}>
          <Typography  variant="h" component="h4">Timings:</Typography>
          <div style={{display:'flex', gap: '40px'}}>
            <div style={{opacity: 0.6}}>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Monday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Tuesday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Wednesday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Thursday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Friday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Saturday</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>Sunday</Typography>
            </div>
            <div>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - Midnight</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - Midnight</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - Midnight</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - Midnight</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - 02:00 am</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - 01:00 am</Typography>
            <Typography variant="p" component="p" sx={{marginTop: 1, lineHeight: 2}}>11:00 am - Midnight</Typography>
            </div>
          </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  )
}

export default Location;