/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'



export default class Home extends Component {

  goToNextPage = () => {
    const {navigation} = this.props;
    navigation.navigate('Page');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
        title="Solid Button" 
        onPress={this.goToNextPage}
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