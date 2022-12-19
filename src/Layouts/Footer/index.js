import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {FmdGoodOutlined, LocalPhoneOutlined} from '@mui/icons-material';
import { Mainbutton } from '../../Components/Button';
import Divider from '@mui/material/Divider';
import Facebook from '../../Assets/Images/Facebook.png';
import Whatsapp from '../../Assets/Images/WhatsApp.png';
import Instagram from '../../Assets/Images/Instagram.png';
import Twitter from '../../Assets/Images/Twitter.png';
import Facebook_Mess from '../../Assets/Images/Facebook_messenger.png';
import './style.css';

const Footer = () => {
  return (
    <Container sx={{marginTop: 5}}>
            <Typography className='un_line' variant="h" component="h2">Find Cloud 9 Restaurant at,</Typography>
            <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Typography>
            <Box
                sx={{
                width: "100%",
                height: "100%",
                marginTop: 2,
                backgroundColor: '#1F1A17',
                padding: 5,
                color: '#fff'
      }}
    >
         <Grid container spacing={2}>
        <Grid item md={6}>
        <Typography className='un_line' variant="h" component="h2">Locate us,</Typography>
        <Typography variant="p" component="p" sx={{marginTop: 4, lineHeight: 2}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Typography>
        <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20, marginTop: 15, flexWrap: 'wrap'  }}>
            <div style={{display: 'flex', justifyContent: 'spaceBetween'}}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 2, marginLeft: 1}}>1801 96 St #1899, North Battleford, SK S9A 0J1, Canada</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'spaceBetween' }}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+19876543210</Typography>
            </div>
        </div>
        <div style={{marginTop: 25}}>
            <Mainbutton text="View on map"/>
        </div>
        </Grid>
        <Grid item md={6}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39117.31034872958!2d-101.73132388919485!3d57.88694552935808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52452c333d24e933%3A0x6610ab595a2e0222!2sBrochet%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sin!4v1671423478037!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
      </Grid>
    </Box>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: 50, marginBottom: 50}}>
        <div className='footer'>
    <Typography className='un_line1' variant="h" component="h2" sx={{textAlign: 'center'}}>Connect with us @</Typography>
        <Typography variant="p" component="p" sx={{marginTop: 4, marginBottom: 2, lineHeight: 2, textAlign: 'center'}}>Want to stay in touch with our latest articles and posts? Subscribe to get Conservation India posts right in your inbox.</Typography>
        <Divider/>
        <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20, marginTop: 15 }}>
            <div style={{display: 'flex', justifyContent: 'spaceBetween' }}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 2, marginLeft: 1}}>1801 96 St #1899, North Battleford, SK S9A 0J1, Canada</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'spaceBetween' }}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+19876543210</Typography>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <div style={{display: 'flex', justifyContent: 'spaceBetween', gap: 20 }}>
                <a href='#'><img src={Facebook} alt="fb"></img></a>
                <a href='#'><img src={Twitter} alt="twitter"></img></a>
                <a href='#'><img src={Whatsapp} alt="wa"></img></a>
                <a href='#'><img src={Facebook_Mess} alt="fb_m"></img></a>
                <a href='#'><img src={Instagram} alt="insta"></img></a>
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}

export default Footer