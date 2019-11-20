import Bet from '../../models/bet'
export const SET_BETS = "SET_BETS";

export const fetchBets = () => {
    return  async dispatch => {
        const response = await fetch("https://morning-savannah-66673.herokuapp.com/api/bet")
            
        const resData = await response.json()
        const loadedBets = [];
         for (const key in resData) {
            loadedBets.push(new Bet (key, resData.betType, resData.betAmount,
                resData.timeAmount, resData.timeSelect, resData.charityType,
                resData.sunday, resData.monday, resData.tuesday, resData.wednesday,
                resData.thursday, resData.friday, resData.saturday, resData.userId))
         }
        dispatch({type: SET_BETS, bets: loadedBets})
    }
}