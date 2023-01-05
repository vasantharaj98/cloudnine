import React, {useState} from 'react';
import './App.css';
import RouteRoute from './Routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop';
import Loader from '../src/Components/Loader/loader'

function App() {
  const [loader, setLoader] = useState (false);
  return (
    <>
      <Router>
        {loader && <Loader></Loader>}
        <ScrollToTop/>
        <RouteRoute setLoader={setLoader}/>
       </Router>
    </>
  );
}

export default App;
