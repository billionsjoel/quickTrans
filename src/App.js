import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/index.scss';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
