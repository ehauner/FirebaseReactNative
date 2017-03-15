/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyC1Fsa5r8gjwIXAWhF1wg764BMAJIpBQzM",
    authDomain: "fir-test-4db9e.firebaseapp.com",
    databaseURL: "https://fir-test-4db9e.firebaseio.com",
    storageBucket: "fir-test-4db9e.appspot.com"
});

export default class FirebaseReactNative extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  }

  async signup() {
    if (this.state.email != null && this.state.password != null) {
      try {
          await firebase.auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.password);

          console.log("Account created");
          Alert.alert('Success');

          // Navigate to the Home page, the user is auto logged in

      } catch (error) {
          console.log(error.toString());
          Alert.alert('An error occurred');
      }
    } else {
      Alert.alert('Please enter your info, stupid');
    }
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          style={styles.input}
          placeholder="Password"
        />
        <Button
          onPress={this.signup.bind(this)}
          title="Submit"
          color="#841584"
          accessibilityLabel="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  box: {
    flex: 1,
  },
  input: {
    color: 'black',
    height: 40,
  }
});

AppRegistry.registerComponent('FirebaseReactNative', () => FirebaseReactNative);
