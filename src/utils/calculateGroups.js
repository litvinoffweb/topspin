const calculateGroups = players => {
    let groups;
    console.log(players.length)
    
        if (1 < players.length < 5){
            groups = 2;
        }
            
            
        else if(6 < players.length < 10){
            groups = 3;
        }
        else if(10 < players.length < 20) {
            groups = 4;
        }
            
            
        

    return groups; 
}

export default calculateGroups;