import BETS from '../../data/dummy-data';



const initialState = {
    currentBets:  BETS,
     userBets: BETS.filter(bet => bet.userId === '1')
};

export default (state = initialState, action) => {
    return state;
}

// const test = () => {
//     fetch('http://4.14.210.146:5000/api/bet')
//     .then(response => response.json())
// }

// const betsReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'SET_BETS':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  

//   export default betsReducer;


  