import React from 'react';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';



import betReducer from './store/reducers/bets';
import profileReducer from './store/reducers/profile';
import Initializer from './navigation/Initializer';

const rootReducer = combineReducers({
  bets: betReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer);


export default function App() {



 

  return (
    <Provider store={store}>
      <Initializer />
    </Provider>
  );
}
