import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid ">
          <a class="navbar-brand"><Link to="/">MyProject</Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/users1'>Users</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to='/users2'>Users2</Link></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Options
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item"><Link to='/options/1'>Inscription</Link></a></li>
                  <li><a class="dropdown-item"><Link to='/options/2'>Modification</Link></a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item"><Link to='/options/3'>Suppression</Link></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;