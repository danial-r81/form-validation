import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import { Login, Register } from './Form';
import { Home } from './Home';

export const PageSwitch = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Fragment>
  );
};
