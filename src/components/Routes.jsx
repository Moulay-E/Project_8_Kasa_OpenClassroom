import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import ErrorPage from './error.jsx';
import Logement from '../pages/Logement.jsx';
import Footer from './Footer.jsx';
import data from '../data/data.json';

function RouteConfig() {
   return (
      <div className="App">
         <Router>
            <Header />
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
