import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import axios from 'axios';

const serv = true;
axios.defaults.baseURL =  serv ? "https://nohaapi-production.up.railway.app/" : "http://192.168.0.112:3001/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
