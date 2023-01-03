import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from './Layout';
import Home from '../src/Pages/Home/index';
import Ourmenu from '../src/Pages/Menu/index';
import OurLocation from '../src/Pages/Location/index';
import Aboutus from '../src/Pages/About/index';

const RouteRoute = () => {
  const [selectid, setSelectid] = useState('');
  const [menu, setMenu] = useState(0);
  return (
        <Routes>
          <Route path='/' element={<Layout menu={menu} selectid={selectid} setSelectid={setSelectid}/>}>
          <Route
            path="/"
            element={<Home selectid={selectid} setSelectid={setSelectid} setMenu={setMenu}/>}
          ></Route>
          <Route
            path="/ourmenu"
            element={<Ourmenu menu={menu}/>}
          ></Route>
          <Route
            path="/ourlocation"
            element={<OurLocation/>}
          ></Route>
          <Route
            path="/aboutus"
            element={<Aboutus/>}
          ></Route>
          </Route>
    </Routes>
  )
}

export default RouteRoute;