import { useState } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native'
import { useNavigate } from 'react-router-native'

const Home = () => {

    const [code, setCode] = useState('')
    const navigate = useNavigate()

    const handleChangeText = (e) => {
        setCode(e)
    }

    const handleClick = (e) => {

        if (code === '') {
            Alert.alert('Error', 'Type your code')
            return
        }

        navigate(`/tracking/${code}`)
    }

    return (
        <View style={styles.container}>

            <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />
            </View>

            <Text style={styles.header_text}>Tracking your {'\n'} shipment</Text>

            <SafeAreaView style={styles.input_container}>
                <TextInput
                    style={styles.input}
                    placeholder='Type your code'
                    placeholderTextColor='#7A869A'
                    onChangeText={handleChangeText}
                />
            </SafeAreaView>

            <TouchableHighlight
                onPress={handleClick}
                style={styles.button_radius}
            >
                <View style={styles.button}>
                    <Text style={styles.button_text}>Submit</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    image_container: {
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        height: 128,
        width: 128,
    },
    header_text: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 40,
        textAlign: 'center',
    },
    input_container: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ebecf0',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
        padding: 16,
    },
    button: {
        backgroundColor: '#0052CC',
        borderColor: '#0052CC',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        padding: 16,
    },
    button_radius: {
        borderRadius: 10,
    },
    button_text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
})

export default Home
