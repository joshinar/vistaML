import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
const Home = () => {
  return (
    <div className='home-section'>
      <div className='jumbo-section'>
        <div className='jumbo-container'>
          <h2>Make Wonders</h2>
          <h3>With Your Business Data</h3>
          <p>
            Use Data to Get a 360-Degree <br /> View of Your Business
          </p>
          <Link to='/solutions'>
            <button>Learn More</button>
          </Link>
        </div>
      </div>
      <div className='section-1'>
        <h4>
          Let Your Data Take <br />
          Your Business to
          <br /> Higher Grounds
        </h4>
        <div className='items-container'>
          <div className='item'>
            <i className='fas fa-seedling fa-2x'></i>
            <h5>
              Collections & <br /> Recoveries
            </h5>
            <div></div>
          </div>
          <div className='item'>
            <i className='fas fa-funnel-dollar fa-2x'></i>
            <h5>
              Conversion <br /> Optimization
            </h5>
            <div></div>
          </div>
          <div className='item'>
            <i className='fas fa-layer-group fa-2x'></i>
            <h5>
              Virtual
              <br /> Assistant
            </h5>
            <div></div>
          </div>
          <div className='item'>
            <i className='fas fa-users-cog fa-2x'></i>
            <h5>GANS</h5>
            <div></div>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <h4>
          Are You Ready to Accelerate <br />
          Your Business?
        </h4>
        <div className='CTA-section'>
          <h3>
            Use Machine Learning as a Service (MLaas) <br />
            to do better business
          </h3>
          <Link to='/contact'>
            <button className='mt-5'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
