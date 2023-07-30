import React from 'react';
import Card from '../components/Card';
import data from '../data/data.json';
import homeBannerImg from '../asset/homeBannerImg.png';

function Home() {
   return (
      <>
         <div className="home__banner">
            <div className="home__banner__img">
               <img src={homeBannerImg} alt="bord de mer avec falaise" />
               <div className="home__banner__text__container">
                  <h2 className="home__banner__text__container__h2">
                     Chez vous, partout et ailleurs
                  </h2>
               </div>
            </div>
         </div>
         <Card data={data} />;
      </>
   );
}
export default Home;
