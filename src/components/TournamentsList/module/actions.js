export const actionTypes = {
    FETCH_TOURNAMENTS: 'FETCH_TOURNAMENTS',
    FETCH_TOURNAMENTS_SUCCESS: 'FETCH_TOURNAMENTS_SUCCESS',
    FETCH_TOURNAMENTS_ERROR: 'FETCH_TOURNAMENTS_ERROR'
};

export const fetchTournaments = () => ({
    type: actionTypes.FETCH_TOURNAMENTS
});

export const fetchTournamentsSuccess = tournaments => ({
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    tournaments
});

export const fetchTournamentsError = error => ({
    type: actionTypes.FETCH_TOURNAMENTS_ERROR,
    error
})


