import React from 'react';
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Beranda from './pages/Beranda';
import DaftarBank from './pages/DaftarBank';
import DetailInfoBank from './pages/DetailInfoBank';
import BookAntrian from './pages/BookAntrian';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import 'antd/dist/antd.css';

const App = () => {
    return (
        <Router>
            <Layout>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/beranda" component={Beranda} />
                    <Route path="/daftar-bank" component={DaftarBank} />
                    <Route path="/detail-info-antrian/:id" component={DetailInfoBank} />
                    <Route path="/book-antrian" component={BookAntrian} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App
