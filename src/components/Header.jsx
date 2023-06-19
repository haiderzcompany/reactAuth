import React from 'react';
import './Header.css';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { RiCustomerService2Line } from 'react-icons/ri';
import { HiBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { getToken, getUser,logout } = useAuth();
  return (
    <>
      <div className='bg-theme-500 py-2'>
        <div className='container'>
          <div className='flex flex-row items-center justify-between gap-8'>
            <div id='logo'>
              <Link to={'/'}>
                <div className='h-12'>
                  <svg
                    className='w-full h-full'
                    id='Layer_1'
                    data-name='Layer 1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 472.89 132.29'
                  >
                    <path
                      className='cls-3'
                      d='M16.8,10.03V104.32c0,4.1,3.63,7.18,7.54,6.39,12.94-2.63,39.59-6.6,56.09,1.04,1.29,.6,2.72,.77,4.09,.44,8.18-1.97,37.78-8.44,55.71-3.64,3.99,1.07,7.86-2.12,7.86-6.36V10.03c0-3.56-2.77-6.46-6.23-6.51-12.94-.18-42.63,.59-56.21,10.74-2.02,1.51-4.7,1.68-6.87,.4-6.89-4.09-24.01-11.66-55.77-11.14-3.44,.06-6.2,2.96-6.2,6.51Z'
                    />
                    <path
                      className='cls-3'
                      d='M3.5,9.74V121.33c0,2.1,1.79,3.71,3.81,3.43,12.4-1.7,51.8-6.4,68.01,.23,.45,.18,.84,.47,1.17,.84,1.38,1.55,5.93,5.67,11.21,.23,.39-.4,.88-.68,1.41-.83,5.78-1.69,38.66-10.54,67.09-1.94,2.15,.65,4.31-1.01,4.31-3.32V9.74'
                    />
                    <path
                      className='cls-3'
                      d='M64.65,37.55l-15.9,15.85c-1.92,1.92-1.68,5.17,.52,6.75l15.38,11.13'
                    />
                    <line
                      className='cls-3'
                      x1='71.29'
                      y1='63.48'
                      x2='91.3'
                      y2='43.94'
                    />
                    <path
                      className='cls-3'
                      d='M97.54,37.55l16.5,16.33c1.68,1.66,1.47,4.49-.45,5.87l-16.05,11.53'
                    />
                    <text
                      className='cls-4'
                      transform='translate(74.5 95.92) scale(1.08 1)'
                    >
                      <tspan x='0' y='0'>
                        T
                      </tspan>
                    </text>
                    <text className='cls-1' transform='translate(174.47 50.88)'>
                      <tspan x='0' y='0'>
                        Thekillcode
                      </tspan>
                    </text>
                    <text className='cls-2' transform='translate(308.72 71.15)'>
                      <tspan x='0' y='0'>
                        E-Learnings
                      </tspan>
                    </text>
                  </svg>
                </div>
              </Link>
            </div>
            <div id='search-bar' className='group flex-auto hidden md:block'>
              <div className=' flex flex-row bg-slate-200 group-focus-within:bg-white  rounded-2xl'>
                <input
                  className='flex-auto group-focus-within:bg-white border-0 form-input  bg-slate-200 rounded-l-2xl py-2 px-5 text-rose-700 outline-0'
                  type='text'
                  placeholder='Search Here'
                />
                <button className=' text-center px-8 text-slate-600 bg-theme-200 rounded-2xl'>
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
            <div id='contact-info' className='hidden xl:block'>
              <div className='flex flex-row items-center text-white gap-3'>
                <RiCustomerService2Line className='text-4xl' />
                <div className='flex flex-col'>
                  <span>email@example.com</span>
                  <span>09371551245</span>
                </div>
              </div>
            </div>
            <div id='cart-section' className='xl:w-[150px]'>
              <div className='flex flex-row text-white justify-end gap-4'>
                <div className='relative'>
                  <AiOutlineHeart className='text-2xl' />
                  <span className='bg-rose-600 rounded-full px-[.45rem] text-sm  absolute -top-3 -right-2'>
                    8
                  </span>
                </div>
                <div className='relative'>
                  <AiOutlineShoppingCart className='text-2xl' />
                  <span className='bg-rose-600 rounded-full px-[.45rem] text-sm  absolute -top-3 -right-2'>
                    8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white shadow-[0_0_2px_#555] '>
        <div className='container'>
          <div className='flex flex-row items-center justify-between'>
            <ul className='hidden md:flex flex-row gap-4 items-center'>
              <li>
                <HiBars3 className='bg-theme-500 text-white cursor-pointer inline-block text-3xl py-1' />
              </li>
              <li>
                <Link
                  className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                  to={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                  to={'#'}
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                  to={'#'}
                >
                  Portfolios
                </Link>
              </li>
              <li>
                <Link
                  className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                  to={'#'}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                  to={'#'}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <ul className='flex flex-row gap-4 items-center'>
              {!getToken() && (
                <>
                  <li>
                    <Link
                      className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                      to={'/login'}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                      to={'/register'}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}

              {getToken() && (
                <>
                  <li>
                    <span onClick={logout} className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'>
                      Logout | {getUser().username}
                    </span>
                  </li>
                  <li>
                    <Link
                      className='py-2 inline-block cursor-pointer font-semibold hover:text-theme-500'
                      to={'/profile'}
                    >
                      Profile
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
