import React, { Component } from 'react';
import './index.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                    <p className="mb-0">120</p>
                                    <h5 className="mb-0">Users</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-list-ul fa-2x text-white mb-2"></i>
                                    <p className="mb-0">120</p>
                                    <h5 className="mb-0">Categories</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card bg-warning border-0 shadow-lg">
                                <div className="card-body">
                                    <i className="fas fa-video fa-2x text-white mb-2"></i>
                                    <p className="mb-0">120</p>
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