import React from 'react';
import HomeGallery from '../components/homeGallery';
import data from '../data/data.json';

function Home() {
   return (
      <>
         <h1>Home</h1>;
         <HomeGallery data={data} />;
      </>
   );
}
export default Home;
