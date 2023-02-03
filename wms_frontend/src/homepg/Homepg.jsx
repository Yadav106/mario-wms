import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Report from './Report'
import './styles.css'

const Homepg = () => {
  
  return (
    <div className='home--page'>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Warehouse 1</button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li><a className="dropdown-item" href="#">Warehouse 1</a></li>
              <li><a className="dropdown-item" href="#">Warehouse 2</a></li>
              <li><a className="dropdown-item" href="#">Add Warehouse</a></li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to='/items' className='sidebar--links'>Item Receipt</Link>
                </li>
                <li className="nav-item">
                  <Link to='/entry' className='sidebar--links'>Check In</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pick Order</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cycle Count</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Transfer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Route Return</a>
                </li>
                <li className="nav-item">
                  <Link to='/bar' className='sidebar--links'>Report & Analysis</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container--main'>
        <Report className='report'/>
        <div className="ta-c padT150 padB150">
          <button className="button cancel-btn">
            <Link to='/items' className='item--list'>Items</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Homepg