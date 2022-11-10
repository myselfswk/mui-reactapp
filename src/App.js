import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import About from './components/About';
import AppNavbar from './components/AppNavbar';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
