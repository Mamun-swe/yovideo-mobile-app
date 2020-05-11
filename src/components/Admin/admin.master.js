import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminNav from './Nav/index';
import Dashboard from './Dashboard/index';
import Category from './Category/index';
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
                    <Route path="/admin/category" component={Category} />
                    <Route path="/admin/upload" component={UploadVideo} />
                </Switch>
            </div>
        );
    }
}

export default AdminMaster;