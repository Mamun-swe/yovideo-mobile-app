import React, { Component } from 'react';
import './index.css';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

import poster from '../../../assets/poster/1.jpg';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://media.w3.org/2010/05/bunny/movie.mp4'
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-2">
                            <ReactPlayer
                                url={this.state.url}
                                width="100%"
                                height="100%"
                                controls={true}
                            />
                        </div>
                        <div className="col-12 pb-3">
                            <h5>video title</h5>
                            <div className="d-flex">
                                <div className="pt-1">
                                    <small className="text-muted mb-0"><i className="fas fa-eye mr-2"></i>2000</small>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn btn-light text-danger rounded-0 shadow-none"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 mb-4">
                            <Link to="/home/play/1">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/2">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/3">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/home/play/4">
                                <div className="card border-0 rounded-0 video-card">
                                    <div className="poster-box">
                                        <img src={poster} alt="..." />
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <i className="far fa-play-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-2">
                                        <p className="text-dark mb-0">Lorem ipsum, or lipsum as it </p>
                                    </div>
                                    <div className="footer px-2">
                                        <div className="d-flex">
                                            <div><p className="text-muted mb-0"><i className="fas fa-eye mr-1"></i>1000</p></div>
                                            <div className="ml-auto">
                                                <p className="text-muted mb-0 text-capitalize">fashion</p>
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

export default VideoPlayer;