import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

export default function Header( { navigation, title }) {
//Header is not a screen and does not have access to default navgation. Although we can use navigationOptions to pass navigation as a 
//prop since navigationOption does have access to navigation. - See Homestack / AboutStack from where navigation will be received
    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {/* Icons for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle} >
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}> {title} </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26
    },
    headerTitle: {
        flexDirection: 'row',

    }
});