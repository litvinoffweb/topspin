const calculateGroups = players => {
    let groups;
    
    
        if (players.length < 10){
            groups = 2;
        }
            
            
        else if(players.length < 15){
            groups = 3;
        }
        else if(players.length < 25) {
            groups = 4;
        }
        else if ( players.length < 30) {
            groups = 5;
        }
        else if ( players.length < 35) {
            groups = 6;
        }
        else if ( players.length < 45 ) {
            groups = 8;
        }
    return groups; 
}

export default calculateGroups;