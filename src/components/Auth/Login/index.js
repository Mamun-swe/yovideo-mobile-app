import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="login">
                <h1>Login</h1>
                <Link to="/register">Register</Link>
                <br />
                <Link to="/reset">Forgot Password</Link>
                <br />
                <Link to="/home">Home</Link>
                <br />
                <Link to="/admin">Admin</Link>
            </div>
         );
    }
}
 
export default Login;