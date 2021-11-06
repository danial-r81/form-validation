import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const removeNav = () => {
    const menu = document.querySelector('nav');
    const toggleBtn = document.querySelector('.menu-toggler');
    console.log(toggleBtn);
    if (
      menu.classList.contains('show-menu') &&
      toggleBtn.classList.contains('show-menu-toggler')
    ) {
      menu.classList.remove('show-menu');
      toggleBtn.classList.remove('show-menu-toggler');
      console.log(true);
    }
  };

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <NavLink
          onClick={removeNav}
          exact
          activeClassName='active'
          className='nav-item'
          to='/'>
          <li>خانه</li>
        </NavLink>
        <NavLink
          onClick={removeNav}
          activeClassName='active'
          className='nav-item'
          to='/register'>
          <li>ثبت نام</li>
        </NavLink>
        <NavLink
          onClick={removeNav}
          activeClassName='active'
          className='nav-item'
          to='/login'>
          <li>ورود</li>
        </NavLink>
      </ul>
    </nav>
  );
};
