import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';


import { Route } from 'react-router-dom';

class ProtectedRoute extends Component {

    render() {
        const { component, ...rest } = this.props;
        return(
            <Route {...rest} render={this.renderProtected}/>
        );
    };

    renderProtected = (routeProps) => {
        console.log(this.props, 'ProtectedRoute')
        const { component: ProtectedComponent, authorized } = this.props;
        return(
            authorized ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />
        );
    };
};

const mapStateToProps = state => ({
    authorized: state.signUp.user.id
});

export default connect()(ProtectedRoute);