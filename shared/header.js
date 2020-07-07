import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

export default function Header( { navigation, title }) {
//Header is not a screen and does not have access to default navgation. Although we can use navigationOptions to pass navigation as a 
//prop since navigationOption does have access to navigation. - See Homestack / AboutStack from where navigation will be received
    const openMenu = () => {
        navigation.openDrawer()
    }

    return(
        <View style={styles.header}>
            {/* Icons for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}> {title} </Text>
            </View>
        </View>
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
    }

});