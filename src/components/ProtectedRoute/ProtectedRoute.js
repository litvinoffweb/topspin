import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';

import { Route } from 'react-router-dom';

class ProtectedRoute extends Component {

    render() {
        console.log(this.props, 'protected rotue')
        const { component, ...rest } = this.props;
        return(
            <Route {...rest} render={this.renderProtected}/>
        );
    };

    renderProtected = (routeProps) => {
        console.log(this.props, 'render protected component')
        const { component: ProtectedComponent, authorized } = this.props;
        return(
            authorized ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />
        );
    };
};


const mapStateToProps = state => {
    return {
        authorized: state.firebase.auth.isLoaded
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute);