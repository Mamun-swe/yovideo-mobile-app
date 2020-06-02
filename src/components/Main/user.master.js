import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeNav from './Nav/index';
import SearchIndex from './Search/index';
import Home from './Home/index';
import Categories from './Categories/index';
import SingleCategory from './Category-video/index';
import FavouriteList from './Account/Favourite/index';
import MyVideos from './Account/my-videos/index';
import UploadVideo from './Account/Upload/index';

import VideoPlayer from './Player/index';

class UserMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <HomeNav />
                <Switch>
                    <Route exact path="/home/" component={Home} />
                    <Route path="/home/search" component={SearchIndex} />
                    <Route exact path="/home/category" component={Categories} />
                    <Route path="/home/category/:id" component={SingleCategory} />
                    <Route path="/home/favourite" component={FavouriteList} />
                    <Route path="/home/my-videos" component={MyVideos} />
                    <Route path="/home/upload" component={UploadVideo} />
                    <Route path="/home/play/:id" component={VideoPlayer} />
                </Switch>
            </div>
        );
    }
}

export default UserMaster;


