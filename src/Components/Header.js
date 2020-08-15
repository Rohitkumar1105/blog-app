import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap'

import insta from '../assets/images/insta.png'
import fb from '../assets/images/facebook.png'
import pinterest from '../assets/images/pin.png'
import '../assets/scss/header.scss'

const Header = () => {
    return (
        <nav className="nav-component">
            <h3 className="nav-header">Gleeful Entity</h3>
            {/* <div className="nav-social-media">
                <img src={insta} alt="instagram" />
                {fb}
                {pinterest}
            </div> */}
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about-me">About Me</a></li>
                <li><a href="/about-me">Art Gallery</a></li>
                <li><a href="/about-me">My Work</a></li>
                <li><a href="/about-me">Contact Me</a></li>
                {/* <li><a href="https://www.bitdegree.org/">Contact</a></li> */}
            </ul>
        </nav>
    )
}

export default Header
