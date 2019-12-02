import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';



const BetItem = props => {

    const [showDelete, setShowDelete] = useState(true);


    return (
        <TouchableOpacity onPress = {()=> {
            setShowDelete(prevState => !prevState)
        }}>
        <View style={styles.bet}>
            <View style = {styles.details}>
            <Text style = {styles.type}>{props.betType}</Text>
            <Text style = {styles.time}>{props.timeSelect}</Text>
            <Text style = {styles.days}>{props.betDays}</Text>
            <Text style = {styles.amount}>${props.betAmount}</Text>
            {/* <View style = {styles.actions}>
                {showDelete ? 
            <TouchableOpacity onPress = {()=> {
                setShowDelete(prevState => !prevState)
            }} style = {styles.delete}>
                    <Ionicons name = 'ios-arrow-down' size={26}
                    color='white'/>
                </TouchableOpacity> : 
                <View style = {styles.details2}> 
                <Text style = {styles.deleteButton}>Delete</Text>
                    <TouchableOpacity onPress = {()=> {
                setShowDelete(prevState => !prevState)
            }} style = {styles.delete}>
                    <Ionicons name = 'ios-arrow-up' size={26}
                    color='white'/>
                </TouchableOpacity>
                </View>}
            </View> */}
            </View>

            <View style = {styles.actions}>
                {showDelete ? 
            <TouchableOpacity onPress = {()=> {
                setShowDelete(prevState => !prevState)
            }} style = {styles.delete}>
                    <Ionicons name = 'ios-arrow-down' size={26}
                    color='white'/>
                </TouchableOpacity> : 
                <View style = {styles.details2}> 
                <Text style = {styles.deleteButton}>Delete</Text>
                    <TouchableOpacity onPress = {()=> {
                setShowDelete(prevState => !prevState)
            }} style = {styles.delete}>
                    <Ionicons name = 'ios-arrow-up' size={26}
                    color='white'/>
                </TouchableOpacity>
                </View>}
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
        // height: 80,
        marginVertical: 12,
    },
    deleteButton: {
        paddingTop: 20,
        marginBottom: 20,
        marginRight: '34%',
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
    },
    details2: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
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
        paddingTop: 24,
        position: "absolute",
        right: 10,
    },

});

export default BetItem;