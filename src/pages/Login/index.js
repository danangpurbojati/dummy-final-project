import React from 'react';
import { Link } from 'react-router-dom';
import './loginStyle.scss';

const Login = () => {
    return (
        <div className="container login-page d-flex justify-content-center align-items-center">
            <div className="card auth-wrapper p-4">
                <div className="card-body">
                    <h1 className="text-center mb-3">Login</h1>
                    <form>
                        <div className="mb-2 row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input id="email" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input id="password" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <p>
                                Belum punya akun? <Link to="/register">Register</Link>
                            </p>
                            <div className="m-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
