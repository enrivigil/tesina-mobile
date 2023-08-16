import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const Loading = () => {
    return (
        <View style={styles.loader}>

            <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={require('../assets/loading.gif')}
                />
            </View>

            <Text style={styles.loading_text}>Loading</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    image_container: {
        alignItems: 'center',
        marginTop: 60,
    },
    image: {
        height: 64,
        width: 64,
    },
    loading_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default Loading
