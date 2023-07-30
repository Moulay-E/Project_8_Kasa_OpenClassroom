import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from './Banner.jsx';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import ErrorPage from './Error.jsx';
import Logement from '../pages/logement.jsx';
import Footer from './Footer.jsx';
import data from '../data/data.json';

function RouteConfig() {
   return (
      <div className="route">
         <Router>
            <Banner />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/About" element={<About />} />
               <Route path="/housing/:id" element={<Logement data={data} />} />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}
export default RouteConfig;
