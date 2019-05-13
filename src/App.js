/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

export default App;
