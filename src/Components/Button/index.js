import React from 'react';
import {EastOutlined} from '@mui/icons-material';
import './style.css';

export const Mainbutton = ({text}) => {
  return (
    <button className='btn'>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        {text}<EastOutlined sx={{marginLeft: 1, padding: 0}}/>
        </div>
    </button>
  )
}