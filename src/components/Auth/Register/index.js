import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import jwt from "jwt-decode";
import url from "../../url";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            name_err: "",
            email_err: "",
            password_err: "",
            message: "",
        }
    }

    nameChangeHandeller = (event) => {
        this.setState({ name: event.target.value })
    }

    emailChangeHandeller = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordChangeHandeller = (event) => {
        this.setState({ password: event.target.value })
    }

    validate = () => {
        let name_err = "";
        let email_err = "";
        let password_err = "";

        if (!this.state.name) {
            name_err = "Name is required."
        }

        if (!this.state.email.includes('@')) {
            email_err = "Invalid e-mail address."
        }

        if (!this.state.password) {
            password_err = "Password is required."
        }

        if (name_err || email_err || password_err) {
            this.setState({ name_err, email_err, password_err });
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({ name_err: "", email_err: "", password_err: "" })
            const regData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            axios.post(url + "auth/register", regData)
                .then(res => {
                    if (res.status === 200 && res.data.message === 'exist') {
                        this.setState({ message: "This account already created." })
                    }
                    if (res.status === 200 && res.data.message === 'success' && res.data.access_token) {
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
                    if (err.response.status === 501) {
                        this.setState({
                            name_err: err.response.data.errors.name_err,
                            email_err: err.response.data.errors.email_err,
                            password_err: err.response.data.errors.password_err
                        });
                    }
                })
        }
    }


    render() {
        return (
            <div className="auth">
                <div className="overlay">
                    <div className="flex-center flex-column">
                        <div className="card border-0 rounded-0">
                            <h4 className="mb-3">Registration</h4>
                            {
                                this.state.message ? (
                                    <p className="text-danger">
                                        {this.state.message}
                                    </p>
                                ) : null
                            }
                            <form onSubmit={this.handleSubmit}>

                                {/* Name */}
                                <div className="form-group mb-4">
                                    {
                                        this.state.name_err ? (
                                            <small className="text-danger">
                                                {this.state.name_err}
                                            </small>
                                        ) : <small>Name</small>
                                    }
                                    <input type="text" className="form-control rounded-0 shadow-none" onChange={this.nameChangeHandeller} placeholder="Enter name" />
                                </div>

                                {/* E-mail */}
                                <div className="form-group mb-4">
                                    {
                                        this.state.email_err ? (
                                            <small className="text-danger">
                                                {this.state.email_err}
                                            </small>
                                        ) : <small>E-mail</small>
                                    }
                                    <input type="text" className="form-control rounded-0 shadow-none" onChange={this.emailChangeHandeller} placeholder="Enter e-mail" />
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
                                    <input type="password" className="form-control rounded-0 shadow-none" onChange={this.passwordChangeHandeller} placeholder="Enter password" />
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