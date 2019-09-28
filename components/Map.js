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

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { FirebaseWrapper } from '../firebase/firebase';

export class Map extends Component {
  constructor() {
    super()
    this.state = {
      playdates: []
    }
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener('playdates', (playdates) => this.setState({ playdates }))
  }

  render() {
    return (
        <View style={styles.mapcontainer}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
              latitude: 40.705303,
              longitude: -74.009150,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
              }}
          >
          </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mapcontainer: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 60
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
