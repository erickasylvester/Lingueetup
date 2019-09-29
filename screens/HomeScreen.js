import * as WebBrowser from 'expo-web-browser';
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
import { PlayDatesList } from '../components/PlayDatesList';
import { Header } from '../components/Header';
import { FirebaseWrapper } from '../firebase/firebase';
import Icon from 'react-native-vector-icons'
import { SignIn } from '../components/SignIn';
import { PlayDate } from '../components/PlayDate';

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      playdates: [],
      mapView: false,
      selectedMode: false
    }
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener('playdates', (playdates) => this.setState({ playdates }))
  }

  render() {
    return (
      <View style={styles.backgroundcontainer}>
          <ImageBackground source={{uri:'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}} style={{width: '100%', height: '100%'}}>
            <Text>LINGUEETUP</Text>
            <View style={styles.welcomebuttonscontainer}>
                <Button title="Sign In" type="outline" onPress={() => Alert.alert('Feature not available... yet')}/>
                <Button title="Guest" type="outline" onPress={() => this.setState({selectedMode: true})}/>
            </View>
          </ImageBackground>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

