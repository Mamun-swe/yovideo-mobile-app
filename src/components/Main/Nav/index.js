import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import axios from "axios";
import url from "../../url";

import closeIcon from '../../../assets/icons/close.png';


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

    openSearch = () => {
        $('.search-menu').css("right", "0%")
    }

    closeSearch = () => {
        $('.search-menu').css("right", "-100%")
    }



    clearLocaStorage() {
        localStorage.clear()
        this.props.history.push('/')
    }

    // componentDidMount() {
    //     if (!localStorage.getItem('access_token')) {
    //         this.clearLocaStorage()
    //     }
    // }

    logout() {
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
                            <button type="button" className="btn p-0" onClick={this.openSearch}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>

                    {/* Search Menu */}
                    <div className="search-menu">
                        <div className="d-flex">
                            <div className="w-100">
                                <form>
                                    <input type="text" className="form-control rounded-0 shadow-none pl-1" placeholder="Search" />
                                </form>
                            </div>
                            <div className="ml-auto">
                                <button type="button" className="btn rounded-0 shadow-none" onClick={this.closeSearch}>
                                    <img src={closeIcon} alt="..." />
                                </button>
                            </div>
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
                            <li>
                                <button type="button" className="btn rounded-0 shadow-none" onClick={this.logout}>
                                    <i className="fas fa-sign-out-alt"></i>Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="break"></div>
            </div>


        );
    }
}

export default Nav;
