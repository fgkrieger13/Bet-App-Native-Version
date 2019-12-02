import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import BetsPage from '../screens/Bets/BetsPage'
import ProfilePage from '../screens/Profile/ProfilePage'

import Colors from '../constants/Colors'

    const BetNavigator = createStackNavigator ({
        Bets: BetsPage,
        Profile: ProfilePage,
       
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTitleStyle: {
            fontFamily: 'bungee',
            fontSize: 26,
        },
        headerTintColor: 'white'

    }
    });

 export default createAppContainer(BetNavigator);