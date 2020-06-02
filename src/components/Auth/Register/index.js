import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <Link to="/">Login</Link>
            </div>
         );
    }
}
 
export default Register;