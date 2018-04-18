import React from 'react';
import { connect } from 'react-redux';
import UnAuthorized from '../UnAuthorized/UnAuthorized';
import { compose } from 'ramda';
import { Route } from 'react-router-dom';
import { addPlayer } from '../../containers/Routes/AdminPage/module/actions';

const ProtectedAdmin = props => {
        const { component, ...rest } = props;
        
        const renderProtected = (routeProps) => {
            const { component: ProtectedComponent, isAdmin, addPlayers } = props;
            return(
                isAdmin.uid ? <ProtectedComponent {...routeProps} {...props} onSubmit={addPlayers}/> : <UnAuthorized />
            );
        };

        return(
            <Route {...rest} render={renderProtected}/>
        );   
};


const mapStateToProps = state => {
    return {
        isAdmin: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayers: values => {
            dispatch(addPlayer(values.Name, values.Surname, values.Age, values.Rating, values.Style, values.Classic, values.Asian,values.Japan))
        }
    }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
        withConnect
)(ProtectedAdmin);