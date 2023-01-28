import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Homepg = () => {
  anychart.onDocumentReady(function () {

    anychart.theme(anychart.themes.darkEarth);

    var data = {
      header: ["Name", "Death toll"],
      rows: [
        ["San-Francisco (1906)", 1500],
        ["Messina (1908)", 87000],
        ["Ashgabat (1948)", 175000],
        ["Chile (1960)", 10000],
        ["Tian Shan (1976)", 242000],
        ["Armenia (1988)", 25000],
        ["Iran (1990)", 50000]
      ]
    };

    var chart = anychart.bar();
    chart.data(data);
    chart.title("The deadliest earthquakes in the XXth century");
    chart.container("container");
    chart.draw();
  });
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
                  <a className="nav-link active" aria-current="page" href="#">Item Receipt</a>
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
                  <a className="nav-link" href="#">Report & Analysis</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container--main'>
        <div id="container"></div>
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