import BETS from '../../data/dummy-data';
import { SET_BETS } from '../actions/bets';



const initialState = {
    currentBets:  BETS,
     userBets: BETS.filter(bet => bet.userId === '1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BETS:
            return {
                currentBets: action.bets,
                userBets: action.bets.filter(bet => bet.userId === '1')
            }
    }
    return state;
}

// const initialState = {
//     currentBets:  fetch("https://morning-savannah-66673.herokuapp.com/api/bet")
//     .then(response => response.json()),
//      userBets: BETS.filter(bet => bet.userId === '1')
// };

// export default (state = initialState, action) => {
//     return state;
// }


    // fetch('http://4.14.210.146:5000/api/bet')
    // .then(response => response.json())

//     const initialState = {
//         bets: {},
//     };
// const betsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_BETS':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  

//   export default betsReducer;


  