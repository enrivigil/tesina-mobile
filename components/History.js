import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import HistoryItem from './HistoryItem'

const History = ({ history }) => {

    return (
        <View>

            <Text style={styles.header_text}>History</Text>

            {
                history.map((i, j) => <HistoryItem
                    item={i}
                    key={j} />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    header_text: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 30,
    }
})

export default History
