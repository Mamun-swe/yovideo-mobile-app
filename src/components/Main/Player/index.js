import React, { Component } from 'react';
import './index.css';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import axios from "axios";
import url from "../../url";

import playIcon from '../../../assets/icons/play.png';
import nullHeartIcon from '../../../assets/icons/heart-null.png';
import blockHeart from '../../../assets/icons/heart-block.png';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            video_title: null,
            watch_time: null,
            video_url: null,
            videos: [],
            status: null
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

        this.playingVideo()
        this.anotherVideos()

    }

    playingVideo() {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }
        // Playing Videos
        axios.get(url + `client/play/${this.props.match.params.id}`, header)
            .then(res => {
                this.setState({
                    id: res.data.video[0].id,
                    video_url: res.data.video[0].video_file,
                    video_title: res.data.video[0].video_title,
                    watch_time: res.data.video[0].watch_time,
                    status: res.data.video[0].status
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

    // Another Videos
    anotherVideos() {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }
        axios.get(url + "client/videos", header)
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


    addFavourite = () => {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        if (!header) {
            this.clearLocalStorage()
        }

        const data = {
            video_id: this.state.id
        }
        axios.post(url + "client/favourite/create", data, header)
            .then(res => {
                if (res.status === 200) {
                    this.playingVideo()
                }
            })
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 501) {
                    this.clearLocalStorage()
                }
            })
    }

    // Remove Favourite
    removefavourite = () => {
        // Header 
        const header = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }

        if (!header) {
            this.clearLocalStorage()
        }

        const data = {
            video_id: this.state.id
        }
        axios.post(url + "client/favourite/remove", data, header)
            .then(res => {
                if (res.status === 200) {
                    this.playingVideo()
                }
            })
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 501) {
                    this.clearLocalStorage()
                }
            })
    }


    render() {
        const { videos } = this.state;

        if (this.state.status === "0") {
            var addFavouriteList = <button className="btn text-danger rounded-0 shadow-none" title="Add Favourites" onClick={this.addFavourite}><img src={nullHeartIcon} alt="..." /></button>
        } else if (this.state.status === "1") {
            var removefavouriteList = <button className="btn text-danger rounded-0 shadow-none" title="Remove From Favourite" onClick={this.removefavourite}><img src={blockHeart} alt="..." /></button>
        } else {
            var addFavouriteList = <button className="btn text-danger rounded-0 shadow-none" title="Add Favourites" onClick={this.addFavourite}><img src={nullHeartIcon} alt="..." /></button>
        }



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
                                    {addFavouriteList}
                                    {removefavouriteList}
                                </div>
                            </div>
                        </div>
                    </div>


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

export default VideoPlayer;