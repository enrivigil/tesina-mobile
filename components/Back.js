import {
    View,
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from 'react-native'
import { useNavigate } from 'react-router-native'

import ChevronIcon from './ChevronIcon'

const Back = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    return (
        <TouchableWithoutFeedback onPress={goBack}>
            <View style={styles.item}>
                <ChevronIcon />
                <Text style={styles.go_back_text}>Go back</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    go_back_text: {
        color: '#0052cc',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
})

export default Back
