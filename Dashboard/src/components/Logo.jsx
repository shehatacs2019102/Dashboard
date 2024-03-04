import React from 'react';
import './logo.css';
function Logo() {
    const handleToggleSideBar = () => {
      document.body.classList.toggle('toggle-sidebar');
    };

  return (
    <div className="d-flex align-items-center justify-content-between">

              <a href="/" className='logo d-flex align-items-center'></a>
              {/* {<img src='' alt=''/>} */}

              <span className='d-none d-lg-block'>AdminDashBoard</span>

              <i
              className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}
              ></i>


    </div>
  )
}

export default Logo