import React, { Component } from 'react';
import './index.css';


class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: "",
            VideoCategory: null
        }
    }
    render() {
        return (
            <div className="upload-video">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 py-2">
                            <h5 className="mb-0">Upload Video</h5>
                        </div>
                        <div className="col-12 py-2">
                            <form encType="multipart/form-data">
                                {/* Video Title */}
                                <div className="mb-3">
                                    <small className="text-muted">Video Title</small>
                                    <input className="form-control rounded-0 shadow-none" placeholder="Enter video title" />
                                </div>

                                {/* Video Category */}
                                <div className="mb-3">
                                    <small className="text-muted">Category</small>
                                    <select className="form-control rounded-0 shadow-none">
                                        <option value={this.state.VideoCategory}>Select video category</option>
                                        <option>demo</option>
                                    </select>
                                </div>

                                {/* Poster Image */}
                                <div className="mb-3">
                                    <small className="text-muted">Poster Image</small>
                                    <br />
                                    <input type="file" />
                                </div>

                                {/* Video */}
                                <div className="mb-3">
                                    <small className="text-muted">Choose Video</small>
                                    <br />
                                    <input type="file" />
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