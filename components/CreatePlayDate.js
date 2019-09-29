import React, { Component } from 'react';
import { Modal, TextInput, View, Text, ScrollView, TouchableHighlight, Image, StyleSheet, Button } from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';

export class CreatePlayDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName:'',
      host:'',
      location:'',
      date:'',
      time:'',
      language:'',
      activity:'',
      hashtags:''
    }
    this.createPlayDate = this.createPlayDate.bind(this)
  }

  async createPlayDate() {
    try {
      console.log('creating play date!', this.state.eventName)
      // make call to Firebase
      await FirebaseWrapper.GetInstance().CreateNewDocument('playdates', 
        { eventName: this.state.eventName,
          host: this.state.host,
          location: this.state.location,
          date: this.state.date,
          time: this.state.time,
          language: this.state.language,
          activity: this.state.activity,
          hashtags: this.state.hashtags
       }
      )
      this.props.closeModal()
    } catch (error) {
      console.log('something went wrong creating playdate: ', error)
    }
  }

  render() {
    return (
      <Modal style={styles.neweventcontainer}
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}>
        <ScrollView>
        <View style={{ marginTop: 25 }}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal()
            }}>
            <Image 
              source={{ uri: 'https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png' }} 
              style={styles.close}
            />
          </TouchableHighlight>

          <Text>Event Name: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(eventName) => this.setState({ eventName })}
            placeholder="event name"
            value={this.state.eventName} 
            style={styles.input}
          />

          <Text>Host: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(host) => this.setState({ host })}
            placeholder="host"
            value={this.state.host} 
            style={styles.input}
          />

          <Text>Location: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(location) => this.setState({ location })}
            placeholder="location"
            value={this.state.location} 
            style={styles.input}
          />

          <Text>Date: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(date) => this.setState({ date })}
            placeholder="date"
            value={this.state.date} 
            style={styles.input}
          />

          <Text>Time: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(time) => this.setState({ time })}
            placeholder="time"
            value={this.state.time} 
            style={styles.input}
          />

          <Text>Language: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(language) => this.setState({ language })}
            placeholder="language"
            value={this.state.language} 
            style={styles.input}
          />

          <Text>Activity: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(activity) => this.setState({ activity })}
            placeholder="activity"
            value={this.state.activity} 
            style={styles.input}
          />

          <Text>Hastags: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(hashtags) => this.setState({ hashtags })}
            placeholder="hashtags"
            value={this.state.hashtags} 
            style={styles.input}
          />
        </View>
        <Button title="Create PlayDate" onPress={() => this.createPlayDate()}/>
        </ScrollView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  }
})