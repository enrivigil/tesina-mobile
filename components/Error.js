import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const Error = () => {
    return (
        <View>

            <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={require('../assets/error.png')}
                />
            </View>

            <Text style={styles.header_text}>Oops!</Text>
            <Text style={styles.error_text}>Resource not found!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    image_container: {
        alignItems: 'center',
        marginBottom: 60,
        marginTop: 60,
    },
    image: {
        height: 128,
        width: 128,
    },
    header_text: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
    },
    error_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
})

export default Error
