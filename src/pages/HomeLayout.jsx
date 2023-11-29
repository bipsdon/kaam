import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet/>
    </div>
  )
}

export default HomeLayout;
