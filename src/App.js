import React, {useState} from 'react';
import './App.css';
import RouteRoute from './Routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <RouteRoute/>
       </Router>
    </>
  );
}

export default App;
