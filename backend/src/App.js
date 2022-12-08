import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';

//pages
import AdminRegister from './pages/admin/AdminRegister';
import AdminLogin from './pages/admin/AdminLogin';
import UserRegister from './pages/User/UserRegister';
import UserLogin from './pages/User/UserLogin';

function App() {
  return (
    <div className="App">
      <p> Hello from hepify </p>
      <Routes>
        <Route path='/admin-register' element={<AdminRegister />} />
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/user-register' element={<UserRegister/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
