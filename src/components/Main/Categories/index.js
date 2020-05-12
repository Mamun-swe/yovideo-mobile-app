import React, { Component } from 'react';
import './index.css';

import poster from '../../../assets/category_poster/1.jpg';
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container-fluid my-3 categories">
                    <div className="row">
                        <div className="col-12 mb-3 ml-2">
                            <h5 className="mb-0">All Categories</h5>
                        </div>

                        <div className="col-12">

                            <Link to="/home/category/1">
                                <div className="card border-0 rounded-0 category-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <p className="mb-0 text-capitalize">sport</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/category/2">
                                <div className="card border-0 rounded-0 category-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <p className="mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/category/3">
                                <div className="card border-0 rounded-0 category-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <p className="mb-0 text-capitalize">technology</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/category/4">
                                <div className="card border-0 rounded-0 category-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <p className="mb-0 text-capitalize">funny</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;
