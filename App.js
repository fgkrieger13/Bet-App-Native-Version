import React, {useState} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';



import betReducer from './store/reducers/bets';
import profileReducer from './store/reducers/profile';

import BetNavigator from './navigation/BetNavigator';

const rootReducer = combineReducers({
  bets: betReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'bungee': require('./assets/fonts/Bungee-Regular.ttf'),
    'allerta-stencil': require('./assets/fonts/AllertaStencil-Regular.ttf')
  });
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return <AppLoading  startAsync={fetchFonts} onFinish={() => {
      setFontLoaded(true);
    }}/>
  }

 

  return (
    <Provider store={store}>
      <BetNavigator />
    </Provider>
  );
}
