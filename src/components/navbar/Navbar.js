import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('home');
  return (
    <nav className='navbar'>
      <div className='logo-section'>
        <Link to='/'>
          <h4 onClick={() => setActive('home')}>
            <svg
              preserveAspectRatio='xMidYMid meet'
              data-bbox='20.303 25.565 159.393 148.871'
              viewBox='20.303 25.565 159.393 148.871'
              height='200'
              width='200'
              xmlns='http://www.w3.org/2000/svg'
              data-type='color'
              role='img'
              aria-labelledby='svgcid--981dp4epn1m'
            >
              <defs></defs>
              <title id='svgcid--981dp4epn1m'>Homepage</title>
              <g>
                <path
                  d='M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z'
                  fill='#FD6262'
                  data-color='1'
                ></path>
                <path
                  d='M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z'
                  fill='#FD6262'
                  data-color='1'
                ></path>
                <path
                  d='M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z'
                  fill='#FD6262'
                  data-color='1'
                ></path>
              </g>
            </svg>
            Vista<sup>ML</sup>
          </h4>
        </Link>
      </div>
      <div>
        <ul className='menu-section'>
          <Link to='/'>
            <li
              style={{ color: active == 'home' && '#fd6262' }}
              onClick={() => setActive('home')}
            >
              Home
            </li>
          </Link>
          <Link to='/solutions'>
            <li
              style={{ color: active == 'solutions' && '#fd6262' }}
              onClick={() => setActive('solutions')}
            >
              Solutions
            </li>
          </Link>
          <Link>
            <li
              style={{ color: active == 'about' && '#fd6262' }}
              onClick={() => setActive('about')}
            >
              About Us
            </li>
          </Link>
          <Link to='/contact'>
            <li
              className='contact'
              style={{ color: active == 'contact' && '#fd6262' }}
              onClick={() => setActive('contact')}
            >
              Get Started
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
