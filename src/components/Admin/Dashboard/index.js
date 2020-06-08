import React, { Component } from 'react';
import './index.css';
import axios from "axios";
import url from "../../url";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: "",
            admins: "",
            categories: "",
            videos: ""
        }
    }

    clearLocaStorage() {
        localStorage.clear()
        this.props.history.push('/')
    }

    componentDidMount() {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        // Users
        axios.get(url + 'admin/users', header)
            .then(res => {
                this.setState({ users: res.data.data })
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        this.clearLocaStorage()
                    }
                }
            })

        // Admins
        axios.get(url + 'admin/admins', header)
            .then(res => {
                this.setState({ admins: res.data.data })
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        this.clearLocaStorage()
                    }
                }
            })

        // Categories
        axios.get(url + 'admin/categories', header)
            .then(res => {
                this.setState({ categories: res.data.data })
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        this.clearLocaStorage()
                    }
                }
            })

        // Videos
        axios.get(url + 'admin/videos', header)
            .then(res => {
                this.setState({ videos: res.data.data })
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        this.clearLocaStorage()
                    }
                }
            })
    }


    render() {
        return (
            <div className="dashboard">
                <div className="container py-3">
                    <div className="row">

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-user fa-2x text-white mb-2"></i>
                                    <p className="mb-0">{this.state.users}</p>
                                    <h5 className="mb-0">Users</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-user-tie fa-2x text-white mb-2"></i>
                                    <p className="mb-0">{this.state.admins}</p>
                                    <h5 className="mb-0">Admin</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-list-ul fa-2x text-white mb-2"></i>
                                    <p className="mb-0">{this.state.categories}</p>
                                    <h5 className="mb-0">Categories</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-video fa-2x text-white mb-2"></i>
                                    <p className="mb-0">{this.state.videos}</p>
                                    <h5 className="mb-0">Videos</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;