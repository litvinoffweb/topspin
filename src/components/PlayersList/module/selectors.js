import { createSelector } from 'reselect';

const playersNames = state => state.players.players;

export const getPlayersName = createSelector(
    playersNames,
    players => {
        const playersName = [];
        
        players.map( player => playersName.push( player.Name ))
        const filtered = playersName.filter( player => player.toLowerCase().charAt(0) === 'a');
        //console.log(filtered)
        return playersName;
    }
)

const playersAges = state => state.registeredPlayers.registeredPlayers;

export const getPlayersAges = createSelector(
    playersAges,
    players => {
        
        const playersAges = [];
        
        players.map( player => playersAges.push( player.Age ));
        const totalAge = playersAges.length 
                        ? playersAges.reduce( (acc, item) => {
                            
                            return Number(acc) + Number(item)
                        })
                        : console.log('array is empty');
        //console.log('totalAge = ', totalAge)
        const mediumAge = totalAge / playersAges.length;
        playersAges.length ? console.log(mediumAge) : console.log('empty')
        return playersAges;
    }
)

export const totalSelector = createSelector(
    getPlayersName,
    getPlayersAges,
    (names, ages) => {
        const total = [];
        for (let i = 0; i < names.length; i++) {
           const item = 'Name : ' + names[i] + ', ' +  ' Age: ' + ages[i];
           total.push(item)
        }
        return total;
    }
)