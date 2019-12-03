import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';



const NewBetButton = props => {

    return (
        <TouchableOpacity>
        <View style={styles.bet}>
            <View style = {styles.actions}>
                <Text style = {styles.text}>New Bet +</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bet: {
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        backgroundColor: 'rgba(157, 39, 49, .51)',
        marginVertical: 12,
        marginRight: '50%',
    },
    text: {
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
        marginLeft: 16,
        paddingTop: 4,
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 22,
    },

});

export default NewBetButton;