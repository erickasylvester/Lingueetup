import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class AboutScreen extends Component {
    render(){
        return (
            <View style={styles.postContainer}>
                <Text style={styles.bigTitle}>
                LINGUEETUP
                </Text>
                <Image
                style={{ width: 300, height: 300, borderRadius: 25 }}
                source={require('../assets/images/Family.png')} />
                <Text style={styles.titleAbout}>Our Mission</Text>
                <Text> We help parents connect with bilingual families in the area to create an language immersive experience for kids.</Text>
                <Text style={styles.titleAbout}>Our Inspiration</Text>
                <Text>As a bilingual family, committed to teaching spanish to our 1.5 year old daughter, Sydney, we find that playing is the most effective learning method at this young age.
                We are looking to connect with other families that share the same goal of creating a fun playdate environment where only a second language is spoken.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigTitle: {
        fontSize: 30
    },
    picscontainer: {
        width: 100,
        height: 100
    },
    titleAbout: {
        fontSize: 20
    },
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
    alignItems: 'center'
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