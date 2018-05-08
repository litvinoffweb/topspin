import React from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import { compose } from 'ramda';
import { Route } from 'react-router-dom';

const ProtectedRoute = props => {

    const { component, ...rest, location } = props;

    const renderProtected = (routeProps) => {
        const { component: ProtectedComponent, authorized } = props;
        return(
            location ? <ProtectedComponent {...routeProps} {...props}/> : <UnAuthorized />
        );
    };

        return(
            <Route {...rest} render={renderProtected}/>
        ); 
};


const mapStateToProps = state => {
    return {
        authorized: state.authorized.authorized,
        location: state.rotuer.location.pathname
    }
}

const withConnect = connect(mapStateToProps, null)

export default compose(
                 withConnect
         )(ProtectedRoute);