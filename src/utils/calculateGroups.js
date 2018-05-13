const calculateGroups = players => {
    let groups;
    
    
        if (players.length <= 10){
            groups = 2;
        }
            
            
        else if(players.length < 18){
            groups = 3;
        }
        else if(players.length < 24) {
            groups = 4;
        }
        else if ( players.length < 30) {
            groups = 5;
        }
        else if ( players.length <= 36) {
            groups = 6;
        }
        else if (players.length <= 40) {
            groups = 7;
        }
        else if ( players.length <= 45 ) {
            groups = 8;
        }
    return groups; 
}

export default calculateGroups;