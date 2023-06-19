import axios from 'axios';

/* This code is creating an instance of the Axios library with a base URL of `http://localhost/api` and
setting the headers to accept and send JSON data. This instance can be used to make HTTP requests to
the specified API endpoint. */
const Api = axios.create({
  baseURL: 'http://localhost/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',   
  },
});

export default Api;
