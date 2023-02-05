import React, { useState, useEffect } from 'react'
import { SubFooter } from '../../Layouts/Footer';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Tabs from '../../Components/Tabs/index';
import Modal from '../../Components/Modal/index';
import {tabPanel} from './menu'

const tab = [
  {name: "Salads"},
  {name: "Wings"} ,
  {name: "Appetizers"},
  {name: "Cloud BBQ"},
  {name: "Main"},
  {name: "Kids Menu"},
  {name: "Classics"},
  {name: "Sandwiches"},
  {name: "Sides"},
  {name: "Pastas"},
  {name: "Burgers"},
  {name: "Poutines"},
  {name: "Wraps"},
  {name: "Shareables"},
  {name: "Desserts"}
]

const Menu = ({menu, setLoader}) => {
  const [cartcount, setCartcount] = useState(0);
  const [dishes, setDishes] =useState([]);

  const [dish, setDish] = useState({dishname:"", qty: 0, price: ""});

  React.useEffect(()=>{
    const dish1 = dishes;
    const onedish = dish1.filter((e)=>e.dishname !== dish.dishname);
    if(onedish){
      dish.qty !== 0 && onedish.push(dish);
    }
    setDishes(onedish);
  },[dish]);

  useEffect(()=>{
    setCartcount(dishes.length);
  },[dishes, setCartcount]);

  return (
    <>
    <Container sx={{marginTop: 13}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
      <Typography className='un_line' variant="h" component="h2">Choose from Wide Varieties of Menu</Typography>
      <Typography variant="p" className='footer_con' component="p" sx={{marginTop: 4, lineHeight: 2}}>We're Proud to Serve All Kinds of Dishes Browse Through Our Menu and Find Something For Everyone</Typography>
      </div>
      <div>
        <Modal cartcount={cartcount} setLoader={setLoader} dishes={dishes} setDishes={setDishes}></Modal>
      </div>
      </div>
      <Tabs tab={tab} tabPanel={tabPanel} dishes={dishes} dish={dish} setDish={setDish} menu={menu}/>
    </Container>
    <SubFooter/>
    </>
  )
}

export default Menu;