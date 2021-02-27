import React from "react";
import logo from "../image/banner1.jpg";
import './Header.css';
const Header = () => {
  return (
      <div className='header-main-div'>
          <div className='header-img'>
      <img src={logo} alt="" />
          </div>
          <div className="header-menu">
              <a href="/users">Users</a>
              <a href="/female">Female</a>
              <a href="/male">Male</a>
              <a href="/contact">Contact-Us</a>
          </div>
    </div>
  );
};

export default Header;
