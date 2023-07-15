import React from 'react';
import './styles/main.scss';
import RouteConfig from './components/Routes.jsx';
import data from './data/data.json';
function Test() {
   console.log(data);
   return <div>{data[0].title};</div>;
}

function App() {
   return (
      <div className="App">
         <RouteConfig />
         <Test />
      </div>
   );
}

export default App;
