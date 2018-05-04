import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './config';
import AuthPage from './containers/Routes/AuthPage/AuthPage';
import AdminPage from './containers/Routes/AdminPage/AdminPage';
import UserPage from './containers/Routes/UserPage/UserPage';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProtectedAdmin from './components/ProtectedAdmin/ProtectedAdmin';


import Box from 'grommet/components/Box';

class App extends Component {


  render() {
    const { user } = this.props;
    return (
      <Box className="App">
      
        <Switch>
            <Route path="/auth" component={AuthPage}/>
            {user.uid !== 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' 
              ? <ProtectedRoute path={`/user/id:${user.uid}`} component={UserPage} user={user}/> 
              : <ProtectedAdmin path={`/admin`} component={AdminPage} admin={user}/>}
        </Switch>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  user: state.firebase.auth,
  state: state
})

export default withRouter(connect(mapStateToProps)(App));
