import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './sidenavStyle.scss';

const Sidenav = () => {
    return (
        <Layout.Sider className="sidenav">
            <ul className="side-menu">
                <li className="list-menu">
                    <Link to="/beranda">Beranda</Link>
                </li>
                <li className="list-menu">
                    <Link to="/book-antrian">Book Nomor Antrian</Link>
                </li>
                <li className="list-menu">
                    <Link to="/daftar-bank">Daftar Bank & Info Antrian</Link>
                </li>
                <li className="list-menu">
                    <Link to="/login">Sign Out</Link>
                </li>
            </ul>
        </Layout.Sider>
    )
}

export default Sidenav
