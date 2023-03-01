import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';
import {FmdGoodOutlined, LocalPhoneOutlined} from '@mui/icons-material';
import { Mainbutton } from '../../Components/Button';
import Divider from '@mui/material/Divider';
import Facebook from '../../Assets/Images/Facebook.png';
import TikTok from '../../Assets/Images/TikTok.png';
import Instagram from '../../Assets/Images/Instagram.png';
import './style.css';

export const SubFooter = () => {
  return (
    <Container sx={{marginTop: 5}}>
            <Typography className='un_line' variant="h" component="h2">Find Cloud Nine Restaurant at,</Typography>
            <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2}}>Our Cloud Nine Restaurant Could be Near You!</Typography>
            <Box
                sx={{
                width: "100%",
                height: "100%",
                marginTop: 2,
                backgroundColor: '#080808',
                padding: 5,
                color: '#fff'
      }}
    >
         <Grid container spacing={2}>
        <Grid item md={6}>
        <Typography className='un_line' variant="h" component="h2">Locate us,</Typography>
        <Typography variant="p" component="p" sx={{marginTop: 4, lineHeight: 2}}>You can visit our restaurant by locating us through google map. Happy Visiting!</Typography>
        <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20, marginTop: 15, flexWrap: 'wrap'  }}>
            <div>
            <Link href='https://goo.gl/maps/JZtXWi1vxqujv6kKA' target="_blank" sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#fff'}}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>CLOUD NINE BAR & GRILL 368 Bayly St W, Ajax, ON L1S 1P1, Canada</Typography>
            </Link>
            </div>
            <div>
            <Link href='tel: +19059036360' sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#fff'}}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+19059036360</Typography>
            </Link>
            </div>
        </div>
        <div style={{marginTop: 25}}>
            <Link href='https://goo.gl/maps/JZtXWi1vxqujv6kKA' target="_blank" sx={{textDecoration:"none"}}>
            <Mainbutton text="View on map"/>
            </Link>
        </div>
        </Grid>
        <Grid item md={6}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6977524637605!2d-79.03672116878191!3d43.84136458147075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dfa401678975%3A0xbd54d5f97074a11!2sCLOUD%20NINE%20BAR%20%26GRILL!5e0!3m2!1sen!2sin!4v1673412721486!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}
export const Footer = () => {
    return (
    <Container>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 50, marginBottom: 50}}>
        <div className='footer'>
    <Typography className='un_line1' variant="h" component="h2" sx={{textAlign: 'center'}}>Connect with us @</Typography>
        <Typography variant="p" component="p" sx={{marginTop: 4, marginBottom: 2, lineHeight: 2, textAlign: 'center'}}>Want to stay in touch with us? Follow us on our social media platforms</Typography>
        <Divider/>
        <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20, marginTop: 15 }}>
        <div>
            <Link href='https://goo.gl/maps/JZtXWi1vxqujv6kKA' target="_blank" sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#000'}}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>368 Bayly St W, Ajax, ON L1S 1P1, Canada</Typography>
            </Link>
            </div>
            <div>
            <Link href='tel: +19059036360' sx={{textDecoration:"none", display: 'flex', justifyContent: 'spaceBetween', color: '#000'}}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+19059036360</Typography>
            </Link>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20 }}>
                <a href='https://www.facebook.com/profile.php?id=100086433511935&mibextid=LQQJ4d' target="_blank"><img src={Facebook} alt="fb"></img></a>
                {/* <a href='#'><img src={Twitter} alt="twitter"></img></a>
                <a href='#'><img src={Whatsapp} alt="wa"></img></a>
                <a href='#'><img src={Facebook_Mess} alt="fb_m"></img></a> */}
                <a href='https://instagram.com/cloudnineajax?igshid=NDk5N2NlZjQ=' target="_blank"><img src={Instagram} alt="insta"></img></a>
                <a href='https://www.tiktok.com/@cloudnineajax' target="_blank"><img src={TikTok} alt="insta"></img></a>
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}