import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="auth">
                <div className="overlay">
                    <div className="flex-center flex-column">
                        <div className="card border-0 rounded-0">
                            <h4 className="mb-3">Registration</h4>
                            <form>

                                {/* E-mail */}
                                <div className="form-group mb-4">
                                    <small>E-mail</small>
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder="Enter e-mail" />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    <small>Password</small>
                                    <input type="password" className="form-control rounded-0 shadow-none" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-block shadow-none">Create Account</button>

                            </form>

                            <div className="pt-4 text-right">
                                <Link to="/">Already have an account? Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;