import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Box from 'grommet/components/Box';
import Tournament from '../Tournament/Tournament';
import { fetchTournaments } from './module/actions';
import { contains } from 'ramda';

class TournamentsList extends Component {

    componentWillMount() {
        console.log(this.props, 'tounrmaneslist ')
    }
    render() {
        const { tournaments } = this.props;
        return(
                tournaments ? <Box>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan='5' className='th-bg'>Tournament list: </th>
                            </tr>
                            <tr>
                            
                            <th> # </th>
                            <th><span className='th-span-float-left'>Name</span></th>
                            <th>Date</th>
                            <th>Current</th>
                            <th>Delete</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {tournaments.map( (tournament, index) => {
                                return(
                                    <Tournament key={index} tournament={tournament} />
                                )
                            
                                }
                            )}
                        </tbody>
                    </table>
            </Box> : 'loading'
        )
    }
}

const mapStateToProps = state => ({
    isLoaded: state.players.isLoaded,
    isFetching: state.players.isFetching,
    tournaments: state.tournaments.tournaments
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchTournaments())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TournamentsList)