import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './config';
import AuthPage from './containers/Routes/AuthPage/AuthPage';
import AdminPage from './containers/Routes/AdminPage/AdminPage';
import UserPage from './containers/Routes/UserPage/UserPage';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


import Box from 'grommet/components/Box';

class App extends Component {

  // componentWillMount() {
  //   console.log(this.props, 'will')
  // }

  // componentDidMount() {
  //   console.log(this.props, 'did')
  // }


  render() {
    const { user } = this.props;
    //console.log(this.props,' app ')
    return (
      <Box className="App">
      
        <Switch>
            <Route path="/auth" component={AuthPage}/>
            <Route path="/admin" component={AdminPage}/>
            {user.isLoaded ? <ProtectedRoute path={`/user/id:${user.uid}`} component={UserPage} user={user}/> : ''}
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
