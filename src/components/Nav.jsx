import React from 'react';

import NavNotice from './NavNotice';
import SearchBar from './SearchBar';

import NavAvatar from './NavAvatar';
import './nav.css';

function Nav() {
  return (
    <nav className="header-nav ms-auto">

      <ul className="d-flex align-items-center">
          
          
          <NavNotice/>
          
          

      </ul>
      

    </nav>
  )
}

export default Nav