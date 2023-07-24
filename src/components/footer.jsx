import React from 'react';
import kasaLogoFooter from '../asset/LOGOBlack.png';

function Footer() {
   return (
      <footer>
         <div className="footer__container">
            <div>
               <img src={kasaLogoFooter} alt="kasa logo" />
            </div>
            <div className="footer__container__text">
               <h3>© 2020 Kasa.</h3>
               <h3> All rights reserved</h3>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
