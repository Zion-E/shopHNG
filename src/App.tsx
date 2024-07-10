import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Landingpage from './pages/Landingpage';
import Cartpage from './pages/Cartpage';
import Checkoutpage from './pages/Checkoutpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/cartpage" element={<Cartpage />}/>
          <Route path="/checkoutpage" element={<Checkoutpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
