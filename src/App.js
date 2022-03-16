import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/index.scss';
import Dashboard from './views/Dashboard';
import Auth from './views/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
