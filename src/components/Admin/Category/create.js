import React, { Component } from 'react';
import axios from 'axios';
import url from '../../url';
import cat from '../../../assets/static/play.png';

class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_name: "",
            cat_image: null,
            cat_name_err: "",
            cat_image_err: "",
            previewURL: null,
            message: ""
        }
    }

    validate = () => {
        let cat_name_err = "";
        let cat_image_err = "";

        if (!this.state.cat_name) {
            cat_name_err = "Category name is required."
        }

        if (!this.state.cat_image) {
            cat_image_err = "Category poster is required."
        }

        if (cat_name_err || cat_image_err) {
            this.setState({ cat_name_err, cat_image_err });
            return false;
        }

        return true;
    }


    onChangeCatName = (event) => {
        this.setState({
            cat_name: event.target.value
        })
    }

    onChangeFileHandeller = (event) => {
        this.setState({
            cat_image: event.target.files[0],
            previewURL: URL.createObjectURL(event.target.files[0])
        })
    }

    clearStorage() {
        localStorage.clear()
        this.props.history.push('/')
    }

    handleSubmit = (event) => {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        event.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            this.setState({ cat_name_err: "", cat_image_err: "" })

            const data = new FormData();
            data.append("cat_name", this.state.cat_name)
            data.append("cat_image", this.state.cat_image)

            axios.post(url + "admin/category", data, header)
                .then(res => {
                    if (res.status === 200 && res.data.message === 'exist') {
                        this.setState({ message: "This category already created." })
                    }
                    if (res.status === 201 && res.data.message === 'success') {
                        this.setState({ message: "Category successfully created." })
                    }
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        this.clearStorage()
                    } else if (err.response.status === 501) {
                        this.setState({
                            cat_name_err: err.response.data.errors.cat_name_err,
                            cat_image_err: err.response.data.errors.cat_image_err
                        });
                    }
                })

        }
    }


    render() {
        const previewFile = this.state.previewURL;
        return (
            <div className="admin-category-create">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-2">
                            <h5 className="mb-0">Create new category</h5>
                            {
                                this.state.message ? (
                                    <p className="text-danger">
                                        {this.state.message}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="col-12 pt-3 pb-2">
                            <form onSubmit={this.handleSubmit}>

                                {/* Category Name */}
                                <div className="form-group mb-3">
                                    {
                                        this.state.cat_name_err ? (
                                            <small className="text-danger">
                                                {this.state.cat_name_err}
                                            </small>
                                        ) : <small>Category name</small>
                                    }

                                    <input type="text" onChange={this.onChangeCatName} className="form-control rounded-0 shadow-none" placeholder="Enter category name" />
                                </div>

                                {/* Category Poster */}
                                <div className="form-group mb-3">
                                    {
                                        this.state.cat_image_err ? (
                                            <small className="text-danger">
                                                {this.state.cat_image_err}
                                            </small>
                                        ) : <small>Category poster</small>
                                    }
                                    <br />

                                    <input type="file" id="file" name="file" className="inputfile" onChange={this.onChangeFileHandeller} />
                                </div>

                                <div className="form-group mb-3">
                                    {
                                        previewFile ? (
                                            <img src={this.state.previewURL} className="img-fluid" alt="Preview" />
                                        ) : (
                                                <img src={cat} className="img-fluid" alt="category" />
                                            )
                                    }
                                </div>

                                <button type="submit" className="btn btn-block btn-dark rounded-0 shadow-none text-white">Create Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default create;