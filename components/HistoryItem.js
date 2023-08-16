import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import CheckIcon from './CheckIcon'

const HistoryItem = ({ item }) => {

    return (
        <View style={styles.item}>
            <CheckIcon />
            <View style={styles.margin_left}>
                <Text style={styles.date_text}>{item.fecha}</Text>
                <Text style={styles.status_text}>{item.estado}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    margin_left: {
        marginLeft: 20,
    },
    date_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
    },
    status_text: {
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
    }
})

export default HistoryItem
