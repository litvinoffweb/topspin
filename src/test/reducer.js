export default (state = { isPinging: false }, action) => {
    switch (action.type) {
      case 'PING':
        return { isPinging: true        
        };
  
      case 'PONG':
        return { isPinging: false,
          DATA: action.dates };
  
      default:
        return state;
    }
  };