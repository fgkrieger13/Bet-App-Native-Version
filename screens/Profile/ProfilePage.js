import React from 'react';
import { TouchableOpacity, FlatList, Button, Text, View, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'
import {useSelector} from 'react-redux';
import BetItem from '../../components/BetItem';
import { LinearGradient } from 'expo-linear-gradient';
import image from '../../assets/profilepic.jpg'
import { ScrollView } from 'react-native-gesture-handler';




const ProfilePage = props => {

    const user = useSelector(state => state.profile.userProfile);

    return (
        <LinearGradient colors={['#d7a8ac', '#BA676E', '#82484D']} style={styles.linearGradient}>
        <ScrollView>
        <View
        style={styles.screen}>
        {/* <Text style={styles.header}>{JSON.stringify(user[0].userName)}</Text> */}
        <Text style={styles.header}>{user[0].firstName} {user[0].lastName}</Text>

        <Image style = {styles.image} source = {require('../../assets/profilepic.jpg')}/>

        <View style={styles.infoBackground}>
            <Text style={styles.info}>Username: {user[0].userName}</Text>
            <Text style={styles.info2}>Account: ${user[0].account}</Text>
            <View style = {styles.buttonShape}>
            <TouchableOpacity>
            <Text style={styles.logout}>Log Out</Text>
            </TouchableOpacity>
            </View>
        </View>
 
    </View>
    </ScrollView>
    </LinearGradient>
    );
}

ProfilePage.navigationOptions = navData => {
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
        fontFamily: 'allerta-stencil',
         fontSize: 36,
         color: '#9D2731'
    },
    info: {
        fontFamily: 'allerta-stencil',
        color: '#9D2731',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
    },
    info2: {
        fontFamily: 'allerta-stencil',
        color: '#9D2731',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
        paddingBottom: 20,
    },
    infoBackground: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        margin: 30,
        borderRadius: 16,
    },
    buttonShape: {
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 1,
        backgroundColor: 'rgba(157, 39, 49, .61)',
        marginBottom: 20,
        marginHorizontal: 100,
        borderRadius: 10,
        height: 40,
    },
    logout: {
        fontFamily: 'allerta-stencil',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 7,
    },
    image: {
        height: 140,
        width: 105,
        marginLeft: '37%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
    }
});

export default ProfilePage