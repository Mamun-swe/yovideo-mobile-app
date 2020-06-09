import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import axios from "axios";
import url from "../../url";

import barIcon from '../../../assets/icons/bar.png';
import closeIcon from '../../../assets/icons/close.png';
import dashboardIcon from '../../../assets/icons/dashboard.png';
import categoriesIcon from '../../../assets/icons/categories.png';
import videoIcon from '../../../assets/icons/video.png';
import uploadIcon from '../../../assets/icons/upload.png';
import logoutIcon from '../../../assets/icons/logout.png';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('.side-menu').css('left', '-100%')
        $('.bars').show()
        $('.close').hide()
    }

    openMenu = () => {
        $('.side-menu').css('left', '0%')
        $('.bars').hide()
        $('.close').show()
    }

    closeMenu = () => {
        $('.side-menu').css('left', '-100%')
        $('.bars').show()
        $('.close').hide()
    }

    clearLocaStorage() {
        localStorage.clear()
        // this.props.history.push('/')
        window.location.href = '/';
    }

    doLogout = () => {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        axios.post(url + "auth/logout", header)
            .then(res => {
                console.log(res.data.message)
                if (res.status === 200 && res.data.message === 'success') {
                    this.clearLocaStorage()
                }
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }


    render() {
        return (
            <div className="admin-nav">
                <div className="top-nav text-right">
                    <button type="button" className="btn btn-light shadow-none rounded-circle bars" onClick={this.openMenu}>
                        <img src={barIcon} alt="..." />
                    </button>
                    <button type="button" className="btn btn-light shadow-none rounded-circle close" onClick={this.closeMenu}>
                        <img src={closeIcon} alt="..." />
                    </button>
                </div>
                <div className="break"></div>

                <div className="side-menu p-3">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="is-active" to="/admin/">
                                <img src={dashboardIcon} alt="..." className="mr-2" /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="is-active" to="/admin/category">
                                <img src={categoriesIcon} alt="..." className="mr-2" /> Categories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="is-active" to="/admin/videos">
                                <img src={videoIcon} alt="..." className="mr-2" /> Videos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="is-active" to="/admin/upload">
                                <img src={uploadIcon} alt="..." className="mr-2" />Upload
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" className="btn rounded-0 shadow-none" onClick={this.doLogout}>
                                <img src={logoutIcon} className="img-fluid mr-2" alt="..." />Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;