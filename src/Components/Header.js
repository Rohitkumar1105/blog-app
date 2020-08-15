import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap'
import '../assets/scss/header.scss'

const Header = () => {
    return (
        <nav className="nav-component">
            <h3 className="nav-header">Gleeful Entity</h3>
            <ul className="nav-links">
                <li><a href="https://www.bitdegree.org/" target="_blank">Home</a></li>
                <li><a href="https://www.bitdegree.org/" target="_blank">My Blog</a></li>
                <li><a href="https://www.bitdegree.org/" target="_blank">About</a></li>
                <li><a href="https://www.bitdegree.org/" target="_blank">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header
