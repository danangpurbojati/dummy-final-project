import React from 'react';
import { Link } from 'react-router-dom';
import './loginStyle.scss';

import { Form, Input, Button, Card } from 'antd';

const Login = () => {
    return (
        <div className="login-page">
            <Card className="auth-wrapper">
                <h1>QMS Login</h1>
                <Form>
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input />
                    </Form.Item>
                    <div className="button-wrapper">
                        <Button type="primary">Login</Button>
                        <p>belum punya akun? <Link to="/register">Register</Link></p>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default Login
