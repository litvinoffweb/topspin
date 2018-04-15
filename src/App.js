import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './config';
import Root from './containers/Routes/Root';
import AuthPage from './containers/Routes/AuthPage/AuthPage';
import AdminPage from './containers/Routes/AdminPage/AdminPage';


import Box from 'grommet/components/Box';

class App extends Component {



  render() {
    console.log('props', this.props);

    return (
      <Box className="App">
        <Switch>
            <Route path="/auth" component={AuthPage}/>
            <Route path="/admin" component={AdminPage}/>
        </Switch> 
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  jopa: state.authUser
})

export default withRouter(App);
