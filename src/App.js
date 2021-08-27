import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DaftarBank from './pages/DaftarBank';
import DetailInfo from './pages/DetailInfo';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/beranda" component={Dashboard} />
                <Route path="/daftar-bank" component={DaftarBank} />
                <Route path="/detail-info-antrian/:id" component={DetailInfo} />
                <Route path="/book-antrian" component={Booking} />
            </Switch>
        </Router>
    )
}

export default App
