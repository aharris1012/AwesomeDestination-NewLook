import React, {useState} from 'react'
import {Link} from "react-router-dom"
import MenuBar from "../images/menu.svg"


function Navigation() {

    const[click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div>
            <nav className="navbar">
            <div className="navigationContainer">
                <Link to="/" className="nav-logo">
                  Name here  <img src="https://img.icons8.com/cotton/64/000000/around-the-globe--v1.png"/>
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   <i className={click ? "fas fa-times": "fas fa-bars"}></i>
               </div>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                    </Link>
                  
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    About
                    </Link>
                  
                </li>

                <li className="nav-item">
                    <Link to="/destinations" className="nav-links" onClick={closeMobileMenu}>
                    More Destinations
                    </Link>
                  
                </li>

                <li className="nav-item">
                    <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                    Sign Up
                    </Link>
                  
                </li>
            </ul>

            </div>

            </nav>
            
            
        </div>
    )
}

export default Navigation
