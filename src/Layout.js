import { Outlet } from "react-router-dom";

import Header from '../src/Layouts/Header/index';
import {Footer} from '../src/Layouts/Footer/index';

function Layout({menu, selectid, setSelectid}) {
    
  return (
    <div>
        <Header menu={menu} selectid={selectid} setSelectid={setSelectid}/>

      {/* An <Outlet> renders whatever child route is currently active in App.js */}
        <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;