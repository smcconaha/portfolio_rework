import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Add Logo?</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">About Me</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link" href="#">Contact Me</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar