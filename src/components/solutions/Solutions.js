import React from 'react';
import './solutions.scss';
const Solutions = () => {
  return (
    <div style={{ background: '#141416' }}>
      <div className='solution-jumbo'>
        <h2>
          Dive Into the New Age of <br />
          Accelerated Analytics
        </h2>
      </div>
      <h5 className='text-white ms-4 mt-4'>Our Services</h5>
      <div className='services-section'>
        <div className='service-item'>
          <div className='icon'>
            <i className='fas fa-seedling fa-2x'></i>
          </div>
          <div className='service-desc'>
            <h2>Collections & Recoveries</h2>
            <p className='text-muted'>
              Improve your connection rates by calling your customers and
              debtors at the time they are most likely to answer. Better call
              outcomes. Reduced agent turnover. Improved motivation
            </p>
          </div>
        </div>
        <div className='service-item'>
          <div className='icon'>
            <i className='fas fa-funnel-dollar fa-2x'></i>
          </div>
          <div className='service-desc'>
            <h2>Conversion Optimization</h2>
            <p className='text-muted'>
              Increase Revenue by optimizing the Probability of Checkout Rate of
              products on Web & Mobile applications.
            </p>
          </div>
        </div>
        <div className='service-item'>
          <div className='icon'>
            <i className='fas fa-layer-group fa-2x'></i>
          </div>
          <div className='service-desc'>
            <h2>Virtual Assistant</h2>
            <p className='text-muted'>
              Build Virtual Shopping Assistant to sell Popular Products ,
              handout buying guides and answer customer questions.
            </p>
          </div>
        </div>
        <div className='service-item'>
          <div className='icon'>
            <i className='fas fa-users-cog fa-2x'></i>
          </div>
          <div className='service-desc'>
            <h2>GANS</h2>
            <p className='text-muted'>
              Optimize offline user experience with Deepface Models or Use GANS
              Model to fight fraud or classify Anomalies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
