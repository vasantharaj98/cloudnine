import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../src/Pages/Home/index';
import Ourmenu from '../src/Pages/Menu/index';
import OurLocation from '../src/Pages/Location/index';
import Aboutus from '../src/Pages/About/index';
import Header from '../src/Layouts/Header/index';
import {Footer} from '../src/Layouts/Footer/index'


const RouteRoute = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          ></Route>
          <Route
            path="/ourmenu"
            element={<Ourmenu/>}
          ></Route>
          <Route
            path="/ourlocation"
            element={<OurLocation/>}
          ></Route>
          <Route
            path="/aboutus"
            element={<Aboutus/>}
          ></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RouteRoute;