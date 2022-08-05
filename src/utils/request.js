import axios from 'axios';

console.log();

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export default request;
