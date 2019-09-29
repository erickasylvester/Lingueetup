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
import Geocoder from 'react-native-geocoding';
import { FirebaseWrapper } from '../firebase/firebase';
import { styles } from '../Styles';

export class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region : {},
      markers: []
    }
    Geocoder.init("AIzaSyDFtJUTkoeUoQjChhPxkjNxAOnrDLxXBYo");
    this.addMarker = this.addMarker.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  //Jersey City initial location
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

  async addMarker(location, title, subtitle){
    try{
      let json = await Geocoder.from(location)
      var location = json.results[0].geometry.location;
      const pin =
      {
        latitude: location.lat,
        longitude: location.lng,
        title: title,
        subtitle: subtitle
      }
      let pins = this.state.markers;
      pins.push(pin);
      this.setState({markers: pins})
    }
    catch(error){
       console.warn(error);
    };
  }


  async componentDidMount(){
    this.setState({region: this.getInitialState()})

    const playdates = this.props.playdates;
    for(let i = 0; i < playdates.length; i++){
      await this.addMarker(playdates[i].location, 
                            playdates[i].eventName,
                            playdates[i].date)
    }
  }

  render() {
    const region = this.state.region.region;
    return (
        <View style={styles.mapcontainer}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={region}
          >
            {
              this.state.markers.map((marker, idx) => {
                return (
                  <Marker
                      key={idx}
                    coordinate={{latitude: marker.latitude,
                      longitude: marker.longitude}}
                    title={marker.title}
                    description={marker.subtitle}
                  />
                )
              })
            }
          </MapView>
        </View>
    );
  }
}

// const styles = StyleSheet.create({
//   mapcontainer: {
//     ...StyleSheet.absoluteFillObject,
//     height: 650,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginTop: 60
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   }
// });
