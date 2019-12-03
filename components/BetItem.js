import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const BetItem = props => {

    const [showDelete, setShowDelete] = useState(true);


    return (
        <TouchableOpacity onPress={() => {
            setShowDelete(prevState => !prevState)
        }}>
            {showDelete ?
                <View style={styles.bet}>
                    <View style={styles.details}>
                        <Text style={styles.type}>{props.betType}</Text>
                        {props.betType === 'Wakeup' &&
                            <Text style={styles.time}>{props.timeSelect}</Text>}
                        {props.betType === 'Workout' &&
                            <Text style={styles.time}>{props.timeAmount}</Text>}
                            {props.sunday === true &&
                            <Text style={styles.day}>S</Text>}
                            {props.monday === true &&
                            <Text style={styles.day}>M</Text>}
                            {props.tuesday === true &&
                            <Text style={styles.day}>T</Text>}
                            {props.wednesday === true &&
                            <Text style={styles.day}>W</Text>}
                            {props.thursday === true &&
                            <Text style={styles.day}>R</Text>}
                            {props.friday === true &&
                            <Text style={styles.day}>F</Text>}
                            {props.saturday === true &&
                            <Text style={styles.day}>S</Text>}
                        <Text style={styles.amount}>${props.betAmount}</Text>
                    </View>
                    <View style={styles.actions}>

                        <Ionicons name='ios-arrow-down' size={26}
                            color='white' />
                    </View></View> :
                <View style={styles.bet}>
                    <View style={styles.details}>
                        <Text style={styles.type}>{props.betType}</Text>
                        {props.betType === 'Wakeup' &&
                            <Text style={styles.time}>{props.timeSelect}</Text>}
                        {props.betType === 'Workout' &&
                            <Text style={styles.time}>{props.timeAmount}</Text>}
                            {props.sunday === true &&
                            <Text style={styles.day}>S</Text>}
                            {props.monday === true &&
                            <Text style={styles.day}>M</Text>}
                            {props.tuesday === true &&
                            <Text style={styles.day}>T</Text>}
                            {props.wednesday === true &&
                            <Text style={styles.day}>W</Text>}
                            {props.thursday === true &&
                            <Text style={styles.day}>R</Text>}
                            {props.friday === true &&
                            <Text style={styles.day}>F</Text>}
                            {props.saturday === true &&
                            <Text style={styles.day}>S</Text>}
                        <Text style={styles.amount}>${props.betAmount}</Text>
                    </View>
                    <View style={styles.details2}>
                        <View style={styles.deleteButton} onPress={() => { }}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </View>
                        <View style={styles.actions2}>
                            <Ionicons name='ios-arrow-up' size={26}
                                color='white' />
                        </View>
                    </View>
                </View>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bet: {
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 3,
        backgroundColor: 'rgba(157, 39, 49, .51)',
        // height: 80,
        marginVertical: 12,
    },
    deleteButton: {
        marginBottom: 10,
        marginLeft: '35%',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
    },
    deleteText: {
        fontFamily: 'allerta-stencil',
        color: '#9D2731',
        fontSize: 18,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginHorizontal: 10,
    },
    details2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },

    type: {
        paddingTop: 18,
        paddingBottom: 18,
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
        marginLeft: 16,

    },
    time: {
        paddingTop: 18,
        paddingBottom: 18,
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
        marginLeft: 16,
        marginRight: 16,
    },
    day: {
        paddingTop: 18,
        paddingBottom: 18,
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
    },
    amount: {
        paddingTop: 18,
        paddingBottom: 18,
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
        marginLeft: 16,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        paddingTop: 18,
        position: "absolute",
        right: 10,
    },
    actions2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        position: "absolute",
        right: 10,
    },

});

export default BetItem;