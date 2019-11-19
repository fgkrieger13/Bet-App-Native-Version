import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity,} from 'react-native';



const BetItem = props => {

    return (
        <TouchableOpacity>
        <View style={styles.bet}>
            <View style = {styles.details}>
            <Text style = {styles.type}>{props.betType}</Text>
            <Text style = {styles.time}>{props.timeSelect}</Text>
            <Text style = {styles.days}>{props.betDays}</Text>
            <Text style = {styles.amount}>${props.betAmount}</Text>
            <View style = {styles.actions}>
                <Button color= 'white'title="^"/>
            </View>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bet: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'rgba(157, 39, 49, .51)',
        height: 80,
        marginVertical: 12,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 20,
    },
    type: {
        color: 'white',
        fontSize: 18,
        marginLeft: 20,
    
    },
    time: {
        color: 'white',
        fontSize: 18,
        marginRight: 30,
        marginLeft: 5,
    },
    amount: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 30,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },

});

export default BetItem;