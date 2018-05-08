export const actionTypes = {
    CREATE_TOURNAMENT: 'CREATE_TOURNAMENT',
    TOURNAMENT_STARTED: 'TOURNAMENT_STARTED',
    TOURNAMENT_FINISHED: 'TOURNAMENT_FINISHED'
}

export const createTournament = (name, date) => ({
    type: actionTypes.CREATE_TOURNAMENT,
    name,
    date
})