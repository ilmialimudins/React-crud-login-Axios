import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Jumlah from './components/tambah';
import Ping from './components/kali';
import Min from './components/kurang';
import Pembagian from './components/bagi';
import DataKaryawan from './datatabel/parentData';
import Path from './routes';
import NavbarMain from './Layout/Navbar';
import SidebarMain from './Layout/Sidebar';
import ApiLogin from './Api/apiLogin';


const root = ReactDOM.createRoot(document.getElementById('akar'));
root.render(
  <React.StrictMode>
    <Path/>
    <NavbarMain/>
    <SidebarMain/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
