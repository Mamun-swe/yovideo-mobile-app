import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Auth
import Login from './components/Auth/Login/index';
import Register from './components/Auth/Register/index';
import Reset from './components/Auth/Reset/index';

// User Master
import UserMaster from './components/Main/user.master';
// Admin Master
import AdminMaster from './components/Admin/admin.master';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={Reset} />
          <Route path="/home" component={UserMaster} />
          <Route path="/admin" component={AdminMaster}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
