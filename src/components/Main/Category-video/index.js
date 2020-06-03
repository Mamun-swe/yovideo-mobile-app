import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import poster from '../../../assets/poster/1.jpg';
import playIcon from '../../../assets/icons/play.png';

class SingleCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
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

export default SingleCategory;