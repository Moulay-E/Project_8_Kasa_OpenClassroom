import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../asset/LOGO.png';

function Header() {
   return (
      <nav>
         <img src={logo} alt="logo" />
         <Link to="/">Acceuil</Link>
         <Link to="/About">About</Link>
      </nav>
   );
}

export default Header;
