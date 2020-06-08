import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import url from "../../url";

// import catPoster from '../../../assets/category_poster/1.jpg';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    clearStorage() {
        localStorage.clear()
        this.props.history.push('/')
    }

    componentDidMount() {
        if (!localStorage.getItem('access_token')) {
            this.clearStorage()
        }
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        axios.get(url + "admin/category", header)
            .then(res => {
                if (res.status === 200 && res.data.categories) {
                    this.setState({ categories: res.data.categories })
                }
            })
            .catch(err => {
                if (err.status === 500) {
                    this.clearStorage()
                }
            })
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
                                    <div className="col-6" key={category.id}>
                                        <div className="card shadow">
                                            <img src={category.cat_image} className="img-fluid" alt="..." />
                                            <div className="overlay">
                                                <div className="flex-center flex-column">
                                                    <p className="mb-0 text-capitalize">{category.cat_name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) :
                                null
                        }

                    </div>
                </div>

                <Link to="/admin/category/create" className="btn btn-primary rounded-circle shadow float-btn">
                    <i className="fas fa-plus"></i>
                </Link>

            </div>
        );
    }
}

export default Category;