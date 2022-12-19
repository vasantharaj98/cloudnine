import React from 'react';
import {EastOutlined} from '@mui/icons-material';
import './style.css';

export const Mainbutton = ({text}) => {
  return (
    <button className='btn'>
        {text} <EastOutlined sx={{marginLeft: 3}}/>
    </button>
  )
}