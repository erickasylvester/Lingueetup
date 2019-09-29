import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export function PlayDate(props) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: "https://aspenideasfestival.imgix.net/a786df34-3921-42b8-b7c1-3fb8ef625efa/Elmo_SH2018.jpg?auto=compress%2Cformat&fit=min&fm=jpg&h=290&q=80&rect=0%2C0%2C1000%2C1000&w=290" }} />

        <View style={styles.dateUserContainer}>
            <Text style={styles.eventTitle}>{props.eventInfo.eventName}</Text>
            <Text style={styles.eventDetails}>{props.eventInfo.location}</Text>
            <Text style={styles.eventDetails}>{props.eventInfo.date}</Text>
            <Text style={styles.eventDetails}>{props.eventInfo.time}</Text>
        </View>
      </View>
        <Text style={styles.eventDetails}>Host: {props.eventInfo.host}</Text>
        <Text style={styles.eventDetails}>Language: {props.eventInfo.language}</Text>
        <Text style={styles.eventDetails}>Activity: {props.eventInfo.activity}</Text>
        <Text style={styles.eventDetails}>Hashtags: {props.eventInfo.hashtags}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  }, 
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateUserContainer: {
    marginLeft: 3
  },
  eventTitle: {
    fontSize: 20
  },
  eventDetails: {
    padding: 5,
    fontSize: 10
  }
})

