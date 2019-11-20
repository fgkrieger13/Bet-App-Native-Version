import React, {useEffect} from 'react';
import { FlatList, Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
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
        <View
        style={styles.screen}>
        {/* <Text style={styles.header}>{JSON.stringify(bets)}</Text> */}
        <Text style={styles.header}>CURRENT BETS</Text>
    <ScrollView>
    <NewBetButton/>
    <FlatList 
    data={bets} 
    keyExtractor={item => item.id}
    renderItem={itemData => <BetItem betType={itemData.item.betType}
    timeSelect={itemData.item.timeSelect}
    betDays={itemData.item.monday} 
    betAmount={itemData.item.betAmount}
    />}
    />
    </ScrollView>
    </View>
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
    )} 
}
    

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        backgroundColor: '#d7a8ac',
    },
   header: {
       marginVertical: 30,
       textAlign: 'center',
        fontSize: 32,
        color: 'white'
   }

});

export default connect()(BetsPage)