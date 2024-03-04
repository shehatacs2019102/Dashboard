import React from 'react';
import './nav.css';
import NavNotice from './NavNotice';
import SearchBar from './SearchBar';
function Nav() {
  return (
    <nav className="header-nav ms-auto">

      <ul className="d-flex align-items-center">
          
          <NavNotice/>
          <SearchBar/>
          

      </ul>


    </nav>
  )
}

export default Nav