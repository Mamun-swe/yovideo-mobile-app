import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import url from '../../url';
import { Link } from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    clearLocalStorage() {
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

        if (!header) {
            this.clearLocalStorage()
        }

        axios.get(url + "client/categories", header)
            .then(res => {
                this.setState({ categories: res.data.categories })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.clearLocalStorage()
                } else if (err.response.status === 501) {
                    this.clearLocalStorage()
                }
            })
    }

    render() {
        const { categories } = this.state;
        return (
            <div>
                <div className="container-fluid my-3 categories">
                    <div className="row">
                        <div className="col-12 mb-3 ml-2">
                            <h5 className="mb-0">All Categories</h5>
                        </div>

                        <div className="col-12">

                            {
                                categories.length ?
                                    categories.map(category =>

                                        <Link to={`/home/category/${category.id}`} key={category.id}>
                                            <div className="card border-0 rounded-0 category-card">
                                                <div className="poster-box">
                                                    <img src={category.cat_image} alt="..." />
                                                    <div className="overlay">
                                                        <div className="flex-center flex-column">
                                                            <p className="mb-0 text-capitalize">{category.cat_name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    ) :
                                    null
                            }

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;
