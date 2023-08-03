import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import FullPizza from './pages/FullPizza.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
    <Routes>
      {/* <MainLayout /> <- используем для постоянного header и дочерние элементы (<Outlet/>) идут без / */}
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        {/* /pizza/:id/:super <- передача больше 1 params */}
        {/* <Route path="/pizza/:id/:super" element={<FullPizza />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
