import React from 'react';
import kasaLogoFooter from '../asset/LOGOBlack.png';

function Footer() {
   return (
      <footer>
         <div className="footer__container">
            <div className="footer__container__img">
               <img src={kasaLogoFooter} alt="kasa logo" />
            </div>
            <div className="footer__container__text">
               <h4>© 2020 Kasa. All rights reserved</h4>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
