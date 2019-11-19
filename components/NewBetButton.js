import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity,} from 'react-native';



const NewBetButton = props => {

    return (
        <TouchableOpacity>
        <View style={styles.bet}>
            <View style = {styles.actions}>
                <Button color= 'white'title="New Bet +"/>
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
        marginRight: '60%',
    },
  
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 22,
    },

});

export default NewBetButton;