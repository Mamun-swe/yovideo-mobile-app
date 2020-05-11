import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openMenu() {
        $('.side-menu').css("left", "0%");
    }

    closeMenu() {
        $('.side-menu').css("left", "-100%");
    }


    render() {
        return (
            <div className="home-nav">
                <div className="navbar">
                    <div className="d-flex justify-content-between">
                        <div>
                            <i className="fas fa-bars" onClick={this.openMenu}></i>
                        </div>
                        <div>
                            <h5 className="text-uppercase mb-0 mt-2">yovideos</h5>
                        </div>
                        <div>
                            <NavLink to="/home/search"><i className="fas fa-search"></i></NavLink>
                        </div>
                    </div>
                    <div className="side-menu">
                        <div className="text-right">
                            <span className="close-icon" onClick={this.closeMenu}>&times;</span>
                        </div>
                        <ul>
                            <li><NavLink to="/home"><i className="fas fa-home"></i>Home</NavLink></li>
                            <li><NavLink to="/home/category"><i className="fas fa-list-ul"></i>Categories</NavLink></li>
                            <li><NavLink to="/home/favourite"><i className="fas fa-heart"></i>Favourites</NavLink></li>
                            <li><NavLink to="/home/my-videos"><i className="fas fa-video"></i>My Videos</NavLink></li>
                            <li><NavLink to="/home/upload"><i className="fas fa-upload"></i>Upload</NavLink></li>
                            <li><NavLink to="/"><i className="fas fa-sign-out-alt"></i>Logout</NavLink></li>
                        </ul>
                    </div>

                </div>
                <div className="break"></div>
            </div>


        );
    }
}

export default Nav;
