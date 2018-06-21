import { FETCH_WEATHER } from '../actions/index.js';

export default function(state=[], action) {
    switch (action.type){
    case FETCH_WEATHER:
        console.log("Response", action.payload.data)
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state ]; //ES6 of the above line of code. [ city, city, city ] NOT [ city, [city, city]]
                                                  //Inserts new city on top. 
        
                                                  
        //BEST PRACTICE notes.
        //Avoid state.push(action.payload.data) because it is re-writting the state.
        //With what we've written above, we are manipulating it, not resetting it. 
    }
    return state;
}