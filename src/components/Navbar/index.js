import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import './indexStyle.scss';

const Navbar = () => {
    return (
        <Layout.Header className="header-wrapper">
            <div className="nav-logo-wrapper">
                <Link to="/">QMS</Link>
            </div>
            <div className="nav-menu">
                <div className="menu-list">
                    <Link to="/beranda">Dashboard</Link>
                </div>
                <div className="menu-list">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </Layout.Header>
    )
}

export default Navbar
