import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'
import { useParams } from 'react-router-native'
import axios from 'axios'

import ShipmentInfo from '../components/ShipmentInfo'
import History from '../components/History'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Back from '../components/Back'

const Tracking = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const { code } = useParams()

    useEffect(() => {

        const baseURL = 'https://tracking.godelivery-univo.com/api/v1/tracking'

        axios
            .get(`${baseURL}/${code}`)
            .then(res => {

                setLoading(true)
                setData(res.data)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)

            })
            .catch(err => {
                setData({
                    code: 404,
                })
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })

    }, [])

    return (
        loading ? <Loading /> : <View>
            <ScrollView>
                <View style={styles.container}>

                    <Back />
                    <Text style={styles.header_text}>Tracking</Text>
                    <Text style={styles.tracking_text}>{code}</Text>

                    {
                        parseInt(data.code) === 200
                            ?
                            <View>
                                <ShipmentInfo shipment={data.data.solicitud} />
                                <History history={data.data.historial} />
                            </View>
                            :
                            <Error />
                    }

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header_text: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    tracking_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
})

export default Tracking
