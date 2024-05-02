import React from 'react'
import menuIcon from '../images/menuicon.png';


export default function Navbar(props) {
    const username = props.username
    const accountNumber = props.accountNumber
    
    return (
        <nav className="navbar">
          <div className="menu-icon">
            <span>☰</span> {/* Unicode hamburger icon */}
          </div>
          <div className="username">{username}</div>
          <div className="account-number">{accountNumber}</div>
        </nav>
      );
}