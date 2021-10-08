import React from 'react';
import Logo from "../../assets/image/logo.png";
import "./Header.scss"

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={Logo} alt="logo"/>
                </div>

                <nav className="header-nav">
                    <ul className="nav-list"> 
                        <li className='nav-item'><a className='nav-link' href="#">Blog</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Price</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Login</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
