import React from 'react'

import Register from './components/Pages/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/views/Dashboard';

export default function App() {
  return (
    <>
    <div>  
   
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
     
    </div>
    </>
  );
};

