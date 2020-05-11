import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="admin-nav">
                <div className="navabr border-bottom p-3">
                    <ul>
                        <li><NavLink to="/admin/">Dashboard</NavLink></li>
                        <li><NavLink to="/admin/category">Categories</NavLink></li>
                        <li><NavLink to="/admin/upload">Upload</NavLink></li>
                        <li><NavLink to="/">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;