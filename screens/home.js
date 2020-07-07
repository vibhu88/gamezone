import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        {title: 'Title 1', rating: 5, body: 'Body 1', key: '1'},
        {title: 'Title 2', rating: 4, body: 'Body 2', key: '2'},
        {title: 'Title 3', rating: 5, body: 'Body 3', key: '3'}
    ]);

    return (
        <View style = {globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                        <Text style = {globalStyles.titleText}> { item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}