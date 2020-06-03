import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import barIcon from '../../../assets/icons/bar.png';
import closeIcon from '../../../assets/icons/close.png';
import dashboardIcon from '../../../assets/icons/dashboard.png';
import categoriesIcon from '../../../assets/icons/categories.png';
import uploadIcon from '../../../assets/icons/upload.png';
import logoutIcon from '../../../assets/icons/logout.png';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
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
                            <NavLink exact activeClassName="is-active" to="/admin/upload">
                                <img src={uploadIcon} alt="..." className="mr-2" />Upload
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="is-active" to="/">
                                <img src={logoutIcon} alt="..." className="mr-2" /> Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;