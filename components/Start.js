import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput, ImageBackground, Pressable } from 'react-native';

import backgroundImage from '../assets/background_image.png';

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      backgroundColor: '#090C08',
    }; 
  }

  render() {
    return (
      <View style={ styles.containter }>
        <ImageBackground source={ backgroundImage } resizeMode='cover' style={ styles.imageBackground } >
          <Text style={ styles.title } >Chat App</Text>
          <View style={ styles.inputContainer}>
            <View style={ styles.innerInputContainer }>
              <TextInput 
                style={ styles.nameInput } 
                placeholder="Your name"
                onChangeText={ (text) => this.setState({ name: text }) }
              />
              <View style={ styles.colorSelectorContainer }>
                <Text style={ styles.colorSelectorText }>Choose Background Color:</Text>
                <View style={ styles.colorSelectorCirclesContainer }>
                  {/* Colored circles are pressable, they change backgroundColor state onPress */}
                  <Pressable 
                    style={ [styles.backgroundColorCircles, {backgroundColor: '#090C08'}] }
                    onPress={ () => this.setState({ backgroundColor: '#090C08'})}
                  ></Pressable>
                  <Pressable 
                    style={ [styles.backgroundColorCircles, {backgroundColor: '#474056'}] }
                    onPress={ () => this.setState({ backgroundColor: '#474056'})}
                  ></Pressable>
                  <Pressable 
                    style={ [styles.backgroundColorCircles, {backgroundColor: '#8A95A5'}] }
                    onPress={ () => this.setState({ backgroundColor: '#8A95A5'})}
                  ></Pressable>
                  <Pressable 
                    style={ [styles.backgroundColorCircles, {backgroundColor: '#B9C6AE'}] }
                    onPress={ () => this.setState({ backgroundColor: '#B9C6AE'})}
                  ></Pressable>
                </View>
              </View>
              {/* I used Pressable API instead of button because button cannot be passed style prop and handles color attribute differently between IOS and android */}
              <Pressable
                style={ styles.goChatButton }
                onPress={ () => this.props.navigation.navigate('Chat', { name: this.state.name, backgroundColor: this.state.backgroundColor }) }
              >
                <Text style={ styles.chatButtonText}>Start Chatting</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  containter: {
    flex: 1,
    width: '100%',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: '#FFF',
    margin: 80,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '88%',
    height: '40%',
    backgroundColor: 'white',
    margin: 50,
  },
  innerInputContainer: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: '88%',
    height: '88%',
  },
  nameInput: {
    padding: 15,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 50,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },
  colorSelectorContainer: {
    // backgroundColor: 'orange',
  },
  colorSelectorText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 100,
  },
  colorSelectorCirclesContainer: {
    flexDirection: 'row'
  },
  backgroundColorCircles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 8,
  },
  goChatButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#757083',
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    }
});