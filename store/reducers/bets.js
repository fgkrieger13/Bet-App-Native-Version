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
