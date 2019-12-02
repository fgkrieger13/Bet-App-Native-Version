import React, {useEffect} from 'react';
import { FlatList, Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { LinearGradient } from 'expo-linear-gradient';
import HeaderButton from '../../components/HeaderButton'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import BetItem from '../../components/BetItem';
import NewBetButton from '../../components/NewBetButton';
import { ScrollView } from 'react-native-gesture-handler';
import * as betActions from '../../store/actions/bets'
// import { LinearGradient } from 'expo'



const BetsPage = props => {

    let dispatch = useDispatch();

   
    useEffect(() => {
    dispatch(betActions.fetchBets())
    },[dispatch]);

    const bets = useSelector(state => state.bets.currentBets);

    return (
        <LinearGradient colors={['#d7a8ac', '#BA676E', '#82484D']} style={styles.linearGradient}>
        <View
        style={styles.screen}>
            <ScrollView>
        {/* <Text style={styles.header}>{JSON.stringify(bets)}</Text> */}
        <Text style={styles.header}>CURRENT BETS</Text>
    
    <NewBetButton/>
    <FlatList 
    data={bets} 
    keyExtractor={item => item.id}
    renderItem={itemData => <BetItem style={styles.text} betType={itemData.item.betType}
    timeSelect={itemData.item.timeSelect}
    betDays={itemData.item.monday} 
    betAmount={itemData.item.betAmount}
    />}
    />
    </ScrollView>
    </View>
    </LinearGradient>
    );
}

BetsPage.navigationOptions = navData => {
    return {
    headerTitle: 'BET',
    headerRight:( <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Profile" iconName='md-person' onPress={()=> {
            navData.navigation.navigate('Profile')
        }}
        />
    </HeaderButtons>
    ),
    headerLeft:( <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Home" iconName='md-home' onPress={()=> {
            navData.navigation.navigate('Bets')
        }}
        />
    </HeaderButtons>
    )}
}
    

const styles = StyleSheet.create({
    screen: {
        height: "100%",
    },
  
    linearGradient: {
        flex: 1,
        
        borderRadius: 5
    },
   header: {
       marginVertical: 30,
       textAlign: 'center',
       fontFamily: 'bungee',
        fontSize: 36,
        color: '#9D2731'
   },

});

export default connect()(BetsPage)