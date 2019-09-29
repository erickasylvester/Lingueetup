import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { PlayDate } from './PlayDate';
import { styles } from '../Styles'

export class PlayDatesList extends Component {
  render() {
    const playdates = this.props.playdates;
    return (
        <View>
          
        </View>
        <View style={styles.listcontainer}>
            <ScrollView style={styles.eventscontainer}
              style={styles.container}>
              {
                playdates && playdates.map(playdate => 
                  <PlayDate eventInfo={playdate} key={playdate.id} />
                )
              }
            </ScrollView>
        </View>
    );
  }
}
