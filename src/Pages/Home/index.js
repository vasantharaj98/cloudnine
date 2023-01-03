import React, {useState, useEffect} from 'react';
import banner from '../../Assets/Images/Frame_1.png';
import image1 from '../../Assets/Images/image_1.png';
import { Container, Typography } from '@mui/material';
import './style.css';
import { Mainbutton } from '../../Components/Button';
import { SubFooter } from '../../Layouts/Footer';
import Slider from '../../Components/Slider';
import { Link } from 'react-router-dom';

const Home = ({setSelectid, setMenu}) => {

  return (
    <>
    <div className='banner'>
        <img src={banner} className="banner_bg" alt='banner' width="100%" height="100%"></img>
        <div className='banner_text'>
            <img src={image1} alt='banner'></img>
            <Typography className='head_text' variant="h" component="h2" sx={{marginTop: 1, width: "70%", lineHeight: 2}}>Find out whats everyone’s MMMM-ing about!</Typography>
            <Typography className='para' variant="p" component="p" sx={{marginTop: 3, width: "70%", lineHeight: 2}}>It's the season for comfort food! Cozy up at home or gather with friends and family at Boston Pizza to enjoy our delicious NEW Fall Menu.
            FIND OUT MORE
            </Typography>
            <div style={{marginTop: 25}}>
              <Link onClick={()=> setSelectid('Our Menu')} to="/ourmenu" style={{textDecoration: 'none'}}>
                  <Mainbutton text="Find out More"/>
              </Link>
            </div>
        </div>
    </div>
    <Container sx={{marginTop: 5}}>
            <Typography className='un_line' variant="h" component="h2">Choose from Wide Varieties of Menu</Typography>
            <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2, marginBottom: 4}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</Typography>
            <Slider setMenu={setMenu} setSelectid={setSelectid}/>
            <div style={{display: 'flex', justifyContent:'center', marginTop: 30}}>
            <Link onClick={()=> setSelectid('Our Menu')} to="/ourmenu" style={{textDecoration: 'none'}}>
                <Mainbutton text="View all Menu"/>
              </Link>
            </div>
    </Container>
    <SubFooter/>
    </>
  )
}

export default Home;
