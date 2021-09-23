import React from "react";
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import './navbar.css'

function NavBar() {
    return (
        <>
            <nav>
                <Link className="nav-link" to='/'>
                    <h1><GoLocation />FOODIE</h1>
                </Link>
                <div className="navmenu">
                    <Link className="nav-link" to='/home'>
                        Home
                    </Link>
                    <Link className="nav-link" to='/recipes'>
                        Recipes
                    </Link>
                    <Link className="nav-link" to='/restaurants'>
                        Restaurants
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;