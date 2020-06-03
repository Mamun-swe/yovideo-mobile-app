import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import catPoster from '../../../assets/category_poster/1.jpg';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    }
    render() {
        const { categories } = this.state
        return (
            <div className="admin-category">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-2">
                            <h6>Categories</h6>
                        </div>
                    </div>

                    <div className="row">

                        {
                            categories.length ?
                                categories.map(category =>
                                    <div className="col-6" key={category}>
                                        <div className="card shadow">
                                            <img src={catPoster} className="img-fluid" alt="..." />
                                            <div className="overlay">
                                                <div className="flex-center flex-column">
                                                    <p className="mb-0 text-capitalize">funny</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) :
                                null
                        }

                    </div>
                </div>

                <Link to="/admin/category" className="btn btn-primary rounded-circle shadow float-btn">
                    <i className="fas fa-plus"></i>
                </Link>

            </div>
        );
    }
}

export default Category;