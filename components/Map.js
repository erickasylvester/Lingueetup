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
import { Marker } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { FirebaseWrapper } from '../firebase/firebase';

export class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region : {}
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  getInitialState() {
    return {
      region: {
        latitude: 40.719985,
        longitude: -74.036380,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  componentDidMount(){
    this.setState({region: this.getInitialState()})
  }

  render() {
    const playdates = this.props.playdates;
    const region = this.state.region.region;
    console.log('Initial Region: ', region)
    return (
        <View style={styles.mapcontainer}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={region}
          >
            {playdates.map((playdate, idx) => (
              <Marker
                key = {idx}
                // coordinate={marker.latlng}
                coordinate={this.getInitialState()}
                title={playdate.title}
                description={playdate.description}
              />
            ))}
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
