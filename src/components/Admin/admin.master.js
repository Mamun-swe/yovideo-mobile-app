import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminNav from './Nav/index';
import Dashboard from './Dashboard/index';
import Category from './Category/index';
import Videos from './Videos/index';
import CategoryCreate from './Category/create';
import UploadVideo from './Upload/index';

class AdminMaster extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <AdminNav />
                <Switch>
                    <Route exact path="/admin/" component={Dashboard} />
                    <Route exact path="/admin/category" component={Category} />
                    <Route path="/admin/videos" component={Videos} />
                    <Route path="/admin/category/create" component={CategoryCreate} />
                    <Route path="/admin/upload" component={UploadVideo} />
                </Switch>
            </div>
        );
    }
}

export default AdminMaster;