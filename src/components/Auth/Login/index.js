import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.email === 'admin@gmail.com') {
            this.props.history.push('/admin')
        } else {
            this.props.history.push('/home')
        }
    }

    emailChangeHandeller = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordChangeHandeller = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div className="auth">
                <div className="overlay">
                    <div className="flex-center flex-column">
                        <div className="card border-0 rounded-0">
                            <h4 className="mb-3">Login</h4>
                            <form onSubmit={this.handleSubmit}>

                                {/* E-mail */}
                                <div className="form-group mb-4">
                                    <small>E-mail</small>
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder="Enter e-mail" onChange={this.emailChangeHandeller} />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    <small>Password</small>
                                    <input type="password" className="form-control rounded-0 shadow-none" placeholder="Enter password" onChange={this.passwordChangeHandeller} />
                                </div>

                                <button type="submit" className="btn btn-block shadow-none">Login Account</button>

                            </form>

                            <div className="pt-4 text-right">
                                <Link to="/register">Have no account ? Create an account</Link>
                                <p className="text-muted mb-0">OR</p>
                                <Link to="/reset">Forgot password ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;