import React from 'react'
import './sideBar.css'
import navList from '../data/navItem' 
function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <a href="" className="nav-link">

                <i className="bi bi-grid"></i>
                <span>DashBoard</span>

                </a> 
                
            </li>

            <li className="nav-item">
                <a href="#" className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">

                <i className="bi bi-menu-button-wide"></i>
                <span>Documents</span>
                <i className="bi bi-chevron-down ms-auto"></i>

                </a> 
                <ul className="nav-content collapse" id="components-nav" data-bs-parent="#sidebar-nav">

                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Customers</span>

                          </a>

                        </li>


                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Suppliers</span>

                          </a>

                        </li>


                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Logistic</span>

                          </a>

                        </li>

                </ul>
                
            </li>


            <li className="nav-item">
                <a href="#" className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">

                <i className="bi bi-journal-text"></i>
                <span>Forms</span>
                <i className="bi bi-chevron-down ms-auto"></i>

                </a> 
                <ul className="nav-content collapse" id="forms-nav" data-bs-parent="#sidebar-nav">

                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Application Form</span>

                          </a>

                        </li>


                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Release Form</span>

                          </a>

                        </li>


                        <li>
                          <a href="#">

                          <i className="bi bi-circle"></i>
                          <span>Cancellation Form</span>

                          </a>

                        </li>

                </ul>
                
            </li>


            

        </ul>
    </aside>
  )
}

export default SideBar