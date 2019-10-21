import { PlayDatesList } from '../components/PlayDatesList';
import { Header } from '../components/Header';
import { FirebaseWrapper } from '../firebase/firebase';
import Icon from 'react-native-vector-icons'	
import { SignIn } from '../components/SignIn';	
import { PlayDate } from '../components/PlayDate';	
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
  ImageBackground
} from 'react-native';
import { styles } from '../Styles'

export default class HomeScreen extends Component {	
  constructor() {	
    super()
    this.state = {
      playdates: [],
      mapView: false,	
      selectedMode: false	
    }	
  }
  render() {
    return (
      <View style={styles.backgroundcontainer}>	
          <ImageBackground source={{uri:'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}} style={{width: '100%', height: '100%'}}>
            <View style={styles.welcomebuttonscontainer}>
                <Text style={styles.appname}>LINGUEETUP</Text>
                <Button title="Sign In" type="outline" onPress={() => Alert.alert('Feature not available... yet')}/>
                <Button title="Guest" type="outline" onPress={() => this.setState({selectedMode: true})}/>
            </View>	              
          </ImageBackground>
      </View>	
    );
  }	
}
