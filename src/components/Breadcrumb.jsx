import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Breadcrumb = ({
  className = '',
  title = 'Breadcrumb',
  pageName = 'page',
}) => {
  return (
    <div
      className={`${className} bg-[url('/images/breadcrumb.jpg')] tw-breadcrumb `}
      style={{ backgroundSize: '100% 100%' }}
    >
      <div className='container h-full'>
        <div className='flex flex-col absolute h-full justify-center'>
          <h2 className='tw-breadcrumb-title'>{title}</h2>
          <div className='flex'>
            <div className='tw-breadcrumb-steps'>
              <span className='step'>
                <Link to={'/'}>
                  <AiFillHome />
                </Link>
              </span>
              <span className='divi'></span>
              <span>{pageName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
