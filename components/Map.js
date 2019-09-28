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
      region : {}
    }
    Geocoder.init("AIzaSyDFtJUTkoeUoQjChhPxkjNxAOnrDLxXBYo");
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

  // async getLatLong(address){
  //   try{
  //     const json = await Geocoder.from(address)
	// 	  const location = json.results[0].geometry.location;
  //     console.log("GOT IT!!", location);
  //     return location;
	// 	}
	// 	catch(error){
  //     console.log("OOps, Unable to get Lat Long");
  //     console.warn(error)
  //   }
  // }

  componentDidMount(){
    this.setState({region: this.getInitialState()})
  }

  render() {
    const playdates = this.props.playdates;
    let markers = [];
    playdates.forEach(async(playdate) => {
        Geocoder.from(playdate.location)
        .then(json => {
          var location = json.results[0].geometry.location;
          console.log("GOT THE THING!!", location);
          let marker =
          {
            latitude: playdate.latlong.lat,
            longitude: playdate.latlong.lng,
            title: playdate.eventName,
            subtitle: 'TBD'
          }
          console.log("Adding marker: ", marker);
          markers.push(marker);
          console.log("Added marker: ", marker, " to array: ", markers);
        })
        .catch(error => console.warn(error));
    })
    console.log("All the markers: ", markers);
    const region = this.state.region.region;
    return (
        <View style={styles.mapcontainer}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={region}
          >
            {markers.map(marker => (
              <Marker
                coordinate={{latitude: 40.719985,
                  longitude: -74.036380}}
                title={"title"}
                description={"description"}
              />
            ))}
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
