import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Header from './header.jsx';
import ErrorPage from './error.jsx';
import OtherPage from '../pages/otherPage.jsx';
import data from '../data/data.json';

function RouteConfig() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/habitation" element={<OtherPage data={data} />} />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
         </Router>
      </div>
   );
}
export default RouteConfig;
