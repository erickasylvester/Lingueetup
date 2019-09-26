import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

export function PlayDate() {
    return (
        <View style={styles.eventContainer}>
            <View style={styles.container}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    source={{ uri: "https://aspenideasfestival.imgix.net/a786df34-3921-42b8-b7c1-3fb8ef625efa/Elmo_SH2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=290&q=80&rect=0%2C0%2C1000%2C1000&w=290" }} />
                
                <View style={styles.dateUserContainer}>
                    <Text style={styles.eventName}>Cantemos ABC!!</Text>
                    <Text style={styles.logistics}>Van Vorst Park</Text>
                    <Text style={styles.logistics}>09/26/2019</Text>
                    <Text style={styles.logistics}>3:00pm</Text>
                </View>
            </View>
            <Text style={styles.details}>Host: Ericka Sylvester</Text>
            <Text style={styles.details}>Language: Spanish</Text>
            <Text style={styles.details}>Activity: We will be learning the ABCs song in spanish!</Text>
            <Text style={styles.details}>Hashtags: #abc, #spanish</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateUserContainer: {
        marginLeft: 3
    },
    eventName:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    details:{
        fontSize: 15
    },
    logistics:{
        fontSize: 15
    }
})