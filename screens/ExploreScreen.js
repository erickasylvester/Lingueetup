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
import { Map } from '../components/Map'
import { CreatePlayDate } from '../components/CreatePlayDate';
import { FirebaseWrapper } from '../firebase/firebase';
import Icon from 'react-native-vector-icons'

export default class ExploreScreen extends Component {
  constructor() {
    super()
    this.state = {
      playdates: [],
      mapView: false,
      isModalVisible: false
    }
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  async componentDidMount() {
    await FirebaseWrapper.GetInstance().SetupCollectionListener('playdates', (playdates) => this.setState({ playdates }))
  }

  render() {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.headercontainer}>
                <Text style={styles.titletext}>
                LINGUEETUP
                </Text>
                {!this.state.mapView ? (
                    <TouchableOpacity onPress={() => this.setState({ mapView: true })} style={styles.leftButtonContainer}>
                        <Image
                            style={styles.button}
                            source={{uri:'https://embedgooglemaps.com/wp-content/uploads/2016/11/cropped-EmbedGoogleMpas-avatar.png'}}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => this.setState({ mapView: false })} style={styles.leftButtonContainer}>
                    <Image
                        style={styles.button}
                        source={{uri:'https://www.shareicon.net/data/2016/01/19/255109_list_256x256.png'}}
                    />
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })} style={styles.rightButtonContainer}>
                <Image
                    style={styles.button}
                    source={{uri:'https://github.com/dadewoyin/react-native-day-1/blob/master/assets/images/NewPost.png?raw=true'}}
                />
                </TouchableOpacity>

                <CreatePlayDate isModalVisible={this.state.isModalVisible} closeModal={() => this.closeModal()} />
            </View>
            
            <View>
            {!this.state.mapView ? (
                <View>
                    <PlayDatesList playdates={this.state.playdates}/>
                </View>
            ) : (
                <View>
                    <Map playdates={this.state.playdates}/>
                </View>
            )}
            </View>
    
        </View>
 
    );
  }
}

ExploreScreen.navigationOptions = {
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

