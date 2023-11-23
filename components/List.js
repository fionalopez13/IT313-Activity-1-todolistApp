import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const List = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.addWrapper}>
            <Text style={styles.redText}>✖</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FAF0E6',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {
        maxWidth: '80%',
    },
    
    redText: {
        color: 'red',
        width: 18,
        height: 18,
    },

});

export default List;