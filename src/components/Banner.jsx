import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './../asset/LOGO.png';

function Banner() {
   const [selectedItem, setSelectedItem] = useState(null);
   const handleItemClick = (itemName) => {
      setSelectedItem(itemName);
   };

   return (
      <nav>
         <img src={logo} alt="logo" />
         <ul className="nav__ul">
            <Link to="/">
               <li
                  className={`nav__ul__acceuil 
                  ${selectedItem === 'Acceuil' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('Acceuil')}
               >
                  Acceuil
               </li>
            </Link>
            <Link to="/About">
               <li
                  className={`nav__ul__acceuil 
                  ${selectedItem === 'A Propos' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('A Propos')}
               >
                  A Propos
               </li>
            </Link>
         </ul>
      </nav>
   );
}

export default Banner;
