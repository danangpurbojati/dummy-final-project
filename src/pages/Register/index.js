import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input, Button, Card } from 'antd';

const Register = () => {
    return (
        <div className="login-page">
            <Card className="auth-wrapper">
                <h1>QMS Register</h1>
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
                        <Button type="primary">Register</Button>
                        <p>belum punya akun? <Link to="/login">login</Link></p>
                    </div>
                </Form>
            </Card>
        </div>
    )
}

export default Register
