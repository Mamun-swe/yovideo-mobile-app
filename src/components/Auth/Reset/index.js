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
                            <h4 className="mb-3">Reset Password</h4>
                            <form>

                                {/* E-mail */}
                                <div className="form-group mb-4">
                                    <small>E-mail</small>
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder="Enter e-mail" />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    <small>New Password</small>
                                    <input type="password" className="form-control rounded-0 shadow-none" placeholder="Enter new password" />
                                </div>

                                <button type="submit" className="btn btn-block shadow-none">Submit</button>

                            </form>

                            <div className="pt-4 text-right">
                                <Link to="/register">Have no account? Create an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;