import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { CreatePlayDate } from './CreatePlayDate';
import { Map } from '../components/Map';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      text: ''
    }
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>

        
        <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })} style={styles.buttonContainer}>
          <Image
            style={styles.button}
            source={{uri:'https://embedgooglemaps.com/wp-content/uploads/2016/11/cropped-EmbedGoogleMpas-avatar.png'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })} style={styles.buttonContainer}>
          <Image
            style={styles.button}
            source={require('./../assets/images/NewPost.png')}
          />
        </TouchableOpacity>

        <CreatePlayDate isModalVisible={this.state.isModalVisible} closeModal={() => this.closeModal()} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  headercontainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada'
  },
  titletext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  rightButtonContainer: {
    paddingRight: 5
  },
  leftButtonContainer: {
    paddingLeft: 5
  }
})
