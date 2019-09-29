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

  async addMarker(location){
    try{
      let json = await Geocoder.from(location)
      var location = json.results[0].geometry.location;
      console.log("GOT THE THING!!", location);
      const thing =
      {
        latitude: location.lat,
        longitude: location.lng,
        title: 'Sydneys home',
        subtitle: 'TBD'
      }
      console.log("NEW marker: ", thing);
      let pins = this.state.markers;
      pins.push(thing);
      console.log("Added marker: ", thing, " to array: ", pins);
      this.setState({markers: pins})
    }
    catch(error){
       console.warn(error);
    };
  }


  async componentDidMount(){
    console.log("Component did mount: ", this.props.playdates)
    this.setState({region: this.getInitialState()})

    const playdates = this.props.playdates;
    for(let i = 0; i < playdates.length; i++){
      await this.addMarker(playdates[i].location)
    }

    // const thing =
    // {
    //   latitude: 40.717674,
    //   longitude: -74.032406,
    //   title: 'Exchange Place',
    //   subtitle: 'TBD'
    // }
    // pins.push(thing);
  }

  render() {


    // console.log("All the markers: ", markers);
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
                console.log("In Loop: ", marker)
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
            {/* {playdates.map(async(playdate, idx) => { 
              const latlong = await this.getLatLong(playdate.location)
              console.log("Mapping address: ", playdate.location, " to latlong: ", latlong)
              if(latlong){
                const coordinates = { latitude: latlong.lat,
                                      longitude: latlong.lng}
                console.log('Translated LAT LONG', coordinates)
                return ({
                  <Marker
                    key = {idx}
                    coordinate={{latitude: 40.719985,
                      longitude: -74.036380}}
                    // title={playdate.title}
                    // description={playdate.description}
                  />
                )}
              })
            } */}
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
