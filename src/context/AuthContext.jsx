import React, { useState, useContext } from 'react';
import Api from '../app/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const getToken = () => JSON.parse(sessionStorage.getItem('token'));
  const getUser = () => JSON.parse(sessionStorage.getItem('user'));

  const login = async (formData) => {
    await Api.post('/login', formData)
      .then((res) => {
        const { access_token, user, message } = res.data;
        sessionStorage.setItem('token', JSON.stringify(access_token));
        sessionStorage.setItem('user', JSON.stringify(user));

        navigate('/');
        toast.success(message, {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch((errors) => {
        const {
          data: { messages },
          status,
        } = errors.response;
        toast.error(messages, {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };
  const register = async (formData) => {
    await Api.post('/register', formData)
      .then((res) => {})
      .catch((error) => {});
  };
  const logout = async () => {
    await Api.post(
      '/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem('token')
          )}`,
        },
      }
    )
      .then((res) => {
        const { message } = res.data;
        sessionStorage.clear();
        navigate('/login');
        toast.success(message, {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      })
      .catch((errors) => {
        const {
          data: { messages },
          status,
        } = errors.response;
        toast.error(messages, {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };

  const value = { login, register, logout, getToken, getUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
