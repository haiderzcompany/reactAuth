import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import FormContainer from '../components/FormContainer';
import Breadcrumb from '../components/Breadcrumb';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import useRedirect from '../hooks/useRedirect';

const Login = () => {
  const { login, getToken } = useAuth();
  if (getToken()) {
    useRedirect('/profile')
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  document.title = 'Login';
  const [showPassword, setShowPassword] = useState(false);

  const formHandle = (data) => {
    login(data);
  };

  return (
    <>
      <Breadcrumb title='Login' pageName='Login' />
      <div className='container'>
        <div className='bg-white py-10 my-10 w-[500px] mx-auto'>
          <FormContainer center={true} formTitle='Login Form'>
            <form onSubmit={handleSubmit(formHandle)}>
              <div className='mb-2'>
                <label className='mb-1 relative after:content-["*"] after:text-rose-500 after:absolute after:-right-3 after:-top-1'>
                  Username
                </label>
                <input
                  {...register('username', {
                    required: { value: true, message: 'Username is required' },
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 Character',
                    },
                  })}
                  type='text'
                  placeholder='Username'
                  className='form-input border border-gray-300 outline-0 w-full rounded-lg mt-1'
                  autoComplete='username'
                />
                {errors.username && (
                  <small className='text-rose-500'>
                    {errors.username.message}
                  </small>
                )}
              </div>

              <div className='mb-2'>
                <label className='relative after:content-["*"] after:text-rose-500 after:absolute after:-right-3 after:-top-1'>
                  Password
                </label>

                <div className='flex flex-row mt-1'>
                  <input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                      minLength: {
                        value: 5,
                        message: 'Password must be at least 5 characters',
                      },
                    })}
                    className='flex-auto group-focus-within:bg-white border-gray-300  outline-0 form-input w-full rounded-lg rounded-r-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    autoComplete='new-password'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className=' text-center px-8 border border-gray-300 bg-white rounded-r-2xl'
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={25} />
                    ) : (
                      <AiOutlineEye size={25} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <small className='text-rose-500'>
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div className='mt-3'>
                <button
                  disabled={!isValid}
                  className={
                    isValid
                      ? 'bg-theme-400 text-white py-2 px-4 rounded-lg'
                      : 'bg-theme-700 text-white py-2 px-4 rounded-lg'
                  }
                >
                  Login
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default Login;
