/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'



export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
        title="Solid Button" 
        />
      </View>
    );
  }
}


Home.navigationOptions = () => {
  return {
    title: "Landing Page",
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: 'black',
    headerTintColor: '#ffffff',
  };
};