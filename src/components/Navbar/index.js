import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed">
            <div className="container">
                <Link to="/" className="navbar-brand">QMS</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/beranda">Dahboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
