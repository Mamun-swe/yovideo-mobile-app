import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import url from "../../url";

import playIcon from '../../../assets/icons/play.png';

class SingleCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
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

        axios.get(url + `client/category/${this.props.match.params.id}`, header)
            .then(res => {
                this.setState({ videos: res.data.posters })
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
        const { videos } = this.state;

        return (
            <div className="single-category">
                <div className="container-fluid">
                    <div className="row">

                        {
                            videos.length ?
                                videos.map(video =>
                                    <div className="col-12 py-2 video-card px-2 border-bottom" key={video.id}>
                                        <Link to={`/home/play/${video.id}`}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="poster-box">
                                                        <img src={video.video_poster} className="poster-img" alt="..." />
                                                        <div className="overlay">
                                                            <div className="flex-center flex-column">
                                                                <img src={playIcon} alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pl-2 content">
                                                    <p className="text-dark mb-2 title">{video.video_title}</p>
                                                    <p className="text-muted mb-0 view">{video.watch_time} Views</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ) :
                                null
                        }


                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCategory;