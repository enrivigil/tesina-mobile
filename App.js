import {
    View,
    StyleSheet,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeRouter, Routes, Route } from 'react-router-native'

import Home from './screens/Home'
import Tracking from './screens/Tracking'

const App = () => {
    return (
        <View style={styles.wrapper}>
            <StatusBar style='auto' />

            <NativeRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tracking/:code' element={<Tracking />} />
                </Routes>
            </NativeRouter>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 40,
    }
})

export default App
