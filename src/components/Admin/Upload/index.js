import React, { Component } from 'react';
import './index.css';
import axios from "axios";
import url from "../../url";

class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            category_id: "",
            video_title: "",
            video_poster: null,
            video_file: null,
            nullValue: null,

            category_id_err: "",
            video_title_err: "",
            video_poster_err: "",
            video_file_err: "",

            message: ""
        }
    }

    clearStorage() {
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

    validate = () => {
        let category_id_err = "";
        let video_title_err = "";
        let video_poster_err = "";
        let video_file_err = "";

        if (!this.state.category_id) {
            category_id_err = "Select category."
        }

        if (!this.state.video_title) {
            video_title_err = "Video title is required."
        }

        if (!this.state.video_poster) {
            video_poster_err = "Video poster is required."
        }

        if (!this.state.video_file) {
            video_file_err = "Video file is required."
        }

        if (category_id_err || video_title_err || video_poster_err || video_file_err) {
            this.setState({ category_id_err, video_title_err, video_poster_err, video_file_err });
            return false;
        }

        return true;
    }


    onChangeVideoTitleHandeller = (event) => {
        this.setState({ video_title: event.target.value })
    }

    onChangeVideoCategoryHandeller = (event) => {
        this.setState({ category_id: event.target.value })
    }

    onChangePosterImageHandeller = (event) => {
        this.setState({ video_poster: event.target.files[0] })
    }

    onChangevideoFileHandeller = (event) => {
        this.setState({ video_file: event.target.files[0] })
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
            this.setState({ category_id_err: "", video_title_err: "", video_poster_err: "", video_file_err: "" })

            const data = new FormData();
            data.append("category_id", this.state.category_id)
            data.append("video_title", this.state.video_title)
            data.append("video_poster", this.state.video_poster)
            data.append("video_file", this.state.video_file)

            axios.post(url + "admin/video", data, header)
                .then(res => {
                    if (res.status === 201 && res.data.message === 'success') {
                        this.setState({ message: "Video successfully uploaded." })
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log(err.response)
                    }
                    if (err.response.status === 401) {
                        this.clearStorage()
                    } else if (err.response.status === 501) {
                        this.setState({
                            video_title_err: err.response.data.errors.video_title_err,
                            video_poster_err: err.response.data.errors.video_poster_err,
                            video_file_err: err.response.data.errors.video_file_err,
                        });
                    }
                })

        }
    }


    render() {
        const { categories } = this.state
        return (
            <div className="upload-video">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 py-2">
                            <h5 className="mb-0">Upload Video</h5>
                            {
                                this.state.message ? (
                                    <p className="text-success mb-0">
                                        {this.state.message}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="col-12 py-2">
                            <form onSubmit={this.handleSubmit} encType="multipart/form-data">

                                {/* Video Title */}
                                <div className="mb-3">
                                    {
                                        this.state.video_title_err ? (
                                            <small className="text-danger">
                                                {this.state.video_title_err}
                                            </small>
                                        ) : <small className="text-muted">Video Title</small>
                                    }
                                    <input className="form-control rounded-0 shadow-none" onChange={this.onChangeVideoTitleHandeller} placeholder="Enter video title" />
                                </div>

                                {/* Video Category */}
                                <div className="mb-3">
                                    {
                                        this.state.category_id_err ? (
                                            <small className="text-danger">
                                                {this.state.category_id_err}
                                            </small>
                                        ) : <small className="text-muted">Category</small>
                                    }
                                    <select className="form-control rounded-0 shadow-none" onChange={this.onChangeVideoCategoryHandeller}>
                                        <option value={this.state.nullValue}>Select video category</option>
                                        {
                                            categories.length ?
                                                categories.map(category =>
                                                    <option value={category.id} key={category.id}>{category.cat_name}</option>
                                                ) : null
                                        }
                                    </select>
                                </div>

                                {/* Poster Image */}
                                <div className="mb-3">
                                    {
                                        this.state.video_poster_err ? (
                                            <small className="text-danger">
                                                {this.state.video_poster_err}
                                            </small>
                                        ) : <small className="text-muted">Poster Image</small>
                                    }
                                    <br />
                                    <input type="file" onChange={this.onChangePosterImageHandeller} />
                                </div>

                                {/* Video */}
                                <div className="mb-3">
                                    {
                                        this.state.video_file_err ? (
                                            <small className="text-danger">
                                                {this.state.video_file_err}
                                            </small>
                                        ) : <small className="text-muted">Choose Video</small>
                                    }
                                    <br />
                                    <input type="file" onChange={this.onChangevideoFileHandeller} />
                                </div>

                                <button className="btn btn-block btn-dark rounded-0 shadow-none text-white">Upload</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadVideo;