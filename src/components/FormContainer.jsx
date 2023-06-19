import React, { ReactNode } from 'react';

const FormContainer = ({
  children,
  formTitle = 'Form Title',
  center = false,
  className = '',
}) => {
  return (
    <div
      className={
        center
          ? `bg-white p-10 flex flex-col items-center ${className} mx-auto`
          : `bg-white p-10 flex flex-col items-center ${className}`
      }
    >
      <h3 className='text-lg font-semibold'>{formTitle}</h3>
      <div className={'w-full'}>{children}</div>
    </div>
  );
};

export default FormContainer;
