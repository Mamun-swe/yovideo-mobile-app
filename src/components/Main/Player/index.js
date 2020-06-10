import React, { Component } from 'react';
import './index.css';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import axios from "axios";
import url from "../../url";

import poster from '../../../assets/poster/1.jpg';
import playIcon from '../../../assets/icons/play.png';
import nullHeartIcon from '../../../assets/icons/heart-null.png';
// import blockHeart from '../../../assets/icons/heart-block.png';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video_title: null,
            watch_time: null,
            video_url: null,
            videos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
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

        axios.get(url + `client/play/${this.props.match.params.id}`, header)
            .then(res => {
                this.setState({
                    video_url: res.data.video[0].video_file,
                    video_title: res.data.video[0].video_title,
                    watch_time: res.data.video[0].watch_time
                })
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
            <div className="player">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <ReactPlayer
                                url={this.state.video_url}
                                width="100%"
                                height="100%"
                                controls={true}
                            />
                        </div>
                        <div className="col-12 p-2 video-info">
                            <h6 className="mb-0">{this.state.video_title}</h6>
                            <div className="d-flex">
                                <div className="pt-2">
                                    <small className="text-muted mb-0"><i className="fas fa-eye mr-2"></i>{this.state.watch_time}</small>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn text-danger rounded-0 shadow-none">
                                        <img src={nullHeartIcon} alt="..." />
                                    </button>
                                    {/* <button className="btn text-danger rounded-0 shadow-none">
                                        <img src={blockHeart} alt="..." />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">

                        {
                            videos.length ?
                                videos.map(video =>
                                    <div className="col-12 py-2 video-card px-2 border-bottom" key={video}>
                                        <Link to="/home/play/1">
                                            <div className="d-flex">
                                                <div>
                                                    <div className="poster-box">
                                                        <img src={poster} className="poster-img" alt="..." />
                                                        <div className="overlay">
                                                            <div className="flex-center flex-column">
                                                                <img src={playIcon} alt="..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pl-2 content">
                                                    <p className="text-dark mb-2 title">
                                                        Lorem ipsum, or lipsum as it Lorem ipsum, or lipsum as it ...
                                                    </p>
                                                    <p className="text-muted mb-0 view">1000 Views</p>
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

export default VideoPlayer;