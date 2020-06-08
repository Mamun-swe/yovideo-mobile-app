import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import url from "../../url";
import axios from "axios";
import jwt from "jwt-decode";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            email_err: "",
            password_err: "",
            message: "",
        }
    }

    validate = () => {
        let email_err = "";
        let password_err = "";

        if (!this.state.email.includes('@')) {
            email_err = "Invalid e-mail address."
        }

        if (!this.state.password) {
            password_err = "Password is required."
        }

        if (email_err || password_err) {
            this.setState({ email_err, password_err });
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({ email_err: "", password_err: "" })
            const logData = {
                email: this.state.email,
                password: this.state.password
            }

            axios.post(url + "auth/login", logData)
                .then(res => {
                    if (res.data.message === 'success' && res.data.access_token) {
                        const token = res.data.access_token;
                        const user = jwt(token)
                        localStorage.setItem('access_token', res.data.access_token)
                        if (user.role === 'admin') {
                            this.props.history.push('/admin')
                        } else if (user.role === 'user') {
                            this.props.history.push('/home')
                        } else {
                            this.props.history.push('/')
                        }
                    }
                })
                .catch(err => {
                    if (err.response.status === 404) {
                        this.setState({ message: err.response.data.message })
                    }
                })
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
                            {
                                this.state.message ? (
                                    <p className="text-danger">
                                        {this.state.message}
                                    </p>
                                ) : null
                            }
                            <form onSubmit={this.handleSubmit}>

                                {/* E-mail */}
                                <div className="form-group mb-4">
                                    {
                                        this.state.email_err ? (
                                            <small className="text-danger">
                                                {this.state.email_err}
                                            </small>
                                        ) : <small>E-mail</small>
                                    }

                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder="Enter e-mail" onChange={this.emailChangeHandeller} />
                                </div>

                                {/* Password */}
                                <div className="form-group mb-4">
                                    {
                                        this.state.password_err ? (
                                            <small className="text-danger">
                                                {this.state.password_err}
                                            </small>
                                        ) : <small>Password</small>
                                    }

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