import React from 'react';
import { FlatList, Text, View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/HeaderButton'
import {useSelector} from 'react-redux';
import BetItem from '../../components/BetItem';




const ProfilePage = props => {

    const user = useSelector(state => state.profile.userProfile);

    return (
        <View style={styles.screen}>
            <Text>{user.firstName}</Text>
        </View>
    );
}

    

const styles = StyleSheet.create({
    screen: {
        height: "100%",
        backgroundColor: '#d7a8ac',
    },

});

export default ProfilePage