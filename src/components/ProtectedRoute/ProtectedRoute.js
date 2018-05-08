import React from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import { compose } from 'ramda';
import { Route } from 'react-router-dom';

const ProtectedRoute = props => {

    const { component, ...rest } = props;

    const renderProtected = (routeProps) => {
        const { component: ProtectedComponent, authorized } = props;
        return(
            authorized ? <ProtectedComponent {...routeProps} {...props}/> : <UnAuthorized />
        );
    };

        return(
            <Route {...rest} render={renderProtected}/>
        ); 
};


const mapStateToProps = state => {
    return {
        authorized: state.authorized.authorized
    }
}

const withConnect = connect(mapStateToProps, null)

export default compose(
                 withConnect
         )(ProtectedRoute);