import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import { compose } from 'ramda';
import { Route } from 'react-router-dom';

class ProtectedAdmin extends Component {

    render() {
        console.log(this.props, 'protected admin')
        const { component, ...rest } = this.props;
        return(
            <Route {...rest} render={this.renderProtected}/>
        );
    };

    renderProtected = (routeProps) => {
        const { component: ProtectedComponent, isAdmin, admin } = this.props;
        return(
            isAdmin.uid ? <ProtectedComponent {...routeProps} {...this.props} admin={admin}/> : <UnAuthorized />
        );
    };
};


const mapStateToProps = state => {
    return {
        isAdmin: state.firebase.auth,
        admin: state.firebase.auth
    }
}

const withConnect = connect(mapStateToProps, null)

export default compose(
        withConnect
)(ProtectedAdmin);