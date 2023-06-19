import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FormContainer from '../components/FormContainer';
import { useAuth } from '../context/AuthContext';
import useRedirect from '../hooks/useRedirect';
const Profile = () => {
  const { getToken, getUser } = useAuth();
  if (!getToken()) {
    useRedirect('/login')
  }
  document.title = 'Profile';
  return (
    <>
      <Breadcrumb title='Profile' pageName='Profile' />
      <div className='container'>
        <div className='bg-white py-10 my-10 w-[500px] mx-auto'>
          <FormContainer
            className=''
            center={true}
            formTitle='Profile Update Form'
          > 
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className='mb-2'>
                <label className='mb-1'>Username</label>
                <span
                  className='form-input inline-block border border-gray-300 outline-0 w-full rounded-lg mt-1'
                >{getUser() && getUser().username}</span>
                 

              </div>

              <div className='mt-3'>
                <button
                  className={'bg-theme-700 text-white py-2 px-4 rounded-lg'}
                >
                  Update
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default Profile;
