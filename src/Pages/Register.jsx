import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import FormContainer from '../components/FormContainer';
import Breadcrumb from '../components/Breadcrumb';
import { useForm } from 'react-hook-form';

const Register = () => {
  document.title = 'Register';
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <Breadcrumb title='Register' pageName='Register' />
      <div className='container'>
        <div className='bg-white py-10 my-10 w-[500px] mx-auto'>
          <FormContainer className='' center={true} formTitle='Register Form'>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className='mb-2'>
                <label className='mb-1'>Username</label>
                <input
                  {...register('username', {
                    required: { value: true, message: 'Username is required' },
                    minLength: {
                      value: 5,
                      message: 'Username must be at least 5 characters',
                    },
                  })}
                  type='text'
                  placeholder='Username'
                  className='form-input border border-gray-300 outline-0 w-full rounded-lg mt-1'
                />
                {errors.username && (
                  <small className='text-rose-500'>
                    {errors.username.message}
                  </small>
                )}
              </div>
              <div className='mb-2'>
                <label className='mb-1'>Email</label>
                <input
                  {...register('email', {
                    required: { value: true, message: 'Email is required' },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  type='text'
                  placeholder='Email'
                  className='form-input border border-gray-300 outline-0 w-full rounded-lg mt-1'
                />
                {errors.email && (
                  <small className='text-rose-500'>
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className='mb-2'>
                <label>Password</label>

                <div className='flex flex-row mt-1'>
                  <input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                      minLength: {
                        value: 5,
                        message: 'Username must be at least 5 characters',
                      },
                    })}
                    className='flex-auto group-focus-within:bg-white border-gray-300  outline-0 form-input w-full rounded-lg rounded-r-none'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                  />
                  <button
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
              <div className='mb-2'>
                <label>Confirm Password</label>

                <div className='flex flex-row mt-1'>
                  <input
                    {...register('password_confirmation', {
                      required: {
                        value: true,
                        message: 'Confirm Password is required',
                      },
                      minLength: {
                        value: 5,
                        message:
                          'Confirm Password must be at least 5 characters',
                      },
                      validate: (value) => {
                        return (
                          value === watch('password') ||
                          'Password does not match'
                        );
                      },
                    })}
                    className='flex-auto group-focus-within:bg-white border-gray-300  outline-0 form-input w-full rounded-lg rounded-r-none'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className=' text-center px-8 border border-gray-300 bg-white rounded-r-2xl'
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible size={25} />
                    ) : (
                      <AiOutlineEye size={25} />
                    )}
                  </button>
                </div>
                {errors.password_confirmation && (
                  <small className='text-rose-500'>
                    {errors.password_confirmation.message}
                  </small>
                )}
              </div>

              <div className='mt-3'>
                <button
                  disabled={isValid}
                  className={
                    isValid
                      ? 'bg-theme-400 text-white py-2 px-4 rounded-lg'
                      : 'bg-theme-700 text-white py-2 px-4 rounded-lg'
                  }
                >
                  Register
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default Register;
