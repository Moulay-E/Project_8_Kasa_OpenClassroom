import { useState } from 'react';

function Collapse({ title, description }) {
   const [CollapseOpen, setCollapseOpen] = useState(false);
   console.log('hello');
   return CollapseOpen ? (
      <div className="Collapse">
         <div onClick={() => setCollapseOpen(false)}>
            <h2>{title}</h2>
            <p>collapseLogo</p>
         </div>
      </div>
   ) : (
      <div className="Collapse">
         <div onClick={() => setCollapseOpen(true)}>
            <h2>{title}</h2>
            <p>collapseLogo</p>
            <p>{description}</p>
         </div>
      </div>
   );
}

export default Collapse;
