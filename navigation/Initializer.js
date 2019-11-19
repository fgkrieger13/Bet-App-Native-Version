import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux';


import BetNavigator from './BetNavigator';




const Initializer = props => {

 let dispatch = useDispatch();
 useEffect(() => {
  dispatch({type: "GET_BETS"})
 })

 

  return (
      <BetNavigator />
  );
}


export default Initializer