import React from 'react';
import './adopt.css'

import AdoptionSection1 from './AdoptionSection1'
const AdoptionSection = () => {
  return (
    <div>
      <div className="h-container">
        <div className='h-text'>
           <h1>Meet our adoptable cats!</h1>
        </div>
      </div>
      <p>Here you can adopt a cat or put a cat up for adoption.</p>
      <AdoptionSection1 />

 
</div>
  );
};




export default AdoptionSection;
