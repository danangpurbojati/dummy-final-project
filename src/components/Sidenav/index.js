import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div className="list-group">
            <Link to="/beranda" className="list-group-item list-group-item-action">Beranda</Link>
            <Link to="/book-antrian" className="list-group-item list-group-item-action">Book Nomor Antrian</Link>
            <Link to="/daftar-bank" className="list-group-item list-group-item-action">Daftar Bank</Link>
            <Link to="/" className="list-group-item list-group-item-action">Sign Out</Link>
        </div>
    )
}

export default Sidenav
