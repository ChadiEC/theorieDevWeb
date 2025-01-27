import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';
import NotFound from './page/NotFound';
import Home from './page/Home';
import ListUsers from './page/ListUsers';
import ListUsers2 from './page/ListUsers2';
import Inscription from './page/Inscription';
import Modification from './page/Modification';
import Supression from './page/Supression';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/users1' element={<ListUsers />} />
          <Route path='/users2' element={<ListUsers2 />} />

          <Route path='/options/1' element={<Inscription />} />
          <Route path='/options/2' element={<Modification />} />
          <Route path='/options/3' element={<Supression />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;