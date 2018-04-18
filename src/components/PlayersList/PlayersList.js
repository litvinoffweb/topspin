import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Thead from '../Thead/Thead';
import NewTableRow from '../NewTableRow/NewTableRow';

import { fetchPlayer } from './module/actions';


class PlayersList extends Component {

    componentWillMount() {
        this.props.fetchPlayers();
    }


    render() {

        const { isLoaded, players, isFetching } = this.props;
        return(
            isLoaded && !isFetching ? <Box>
                            <Table>
                                <Thead />
                                <tbody>
                                    {/* {players.map( player => {
                                        return(
                                            <NewTableRow player={player} {...this.props} />
                                            
                                        )
                                    })} */}
                                </tbody>
                            </Table>
                        </Box> 
                    : ''
        )
    }
}

const mapStateToProps = state => ({
    isLoaded: state.players.isLoaded,
    players: state.players,
    isFetching: state.players.isFetching
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PlayersList)