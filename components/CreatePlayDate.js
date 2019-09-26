import React, { Component } from 'react';
import { Modal, TextInput, View, Text,
    TouchableHighlight, Image, StyleSheet, Button } from 'react-native';

export class CreatePlayDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventType: '',
      eventName:'',
      location:'',
      date:'',
      time:'',
      language:'',
      activity:'',
      hashtags:''
    }
  }

  CreatePlayDate() {
    console.log('ayoooo', this.state.eventName)
    // make call to Firebase
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}>
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
          
          <Text>Event Type: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(eventType) => this.setState({ eventType })}
            placeholder="event type"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Event Name: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(eventName) => this.setState({ eventName })}
            placeholder="Event name"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Location: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(location) => this.setState({ location })}
            placeholder="location"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Date: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(date) => this.setState({ date })}
            placeholder="date"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Time: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(time) => this.setState({ time })}
            placeholder="time"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Language: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(language) => this.setState({ language })}
            placeholder="language"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Activity: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(activity) => this.setState({ activity })}
            placeholder="activity"
            value={this.state.text} 
            style={styles.input}
          />

          <Text>Hastags: </Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(hashtags) => this.setState({ hashtags })}
            placeholder="hashtags"
            value={this.state.text} 
            style={styles.input}
          />
        </View>

        <Button title="Create PlayDate" onPress={() => this.CreatePlayDate()}/>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 80
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  }
})