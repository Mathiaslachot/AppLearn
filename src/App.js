/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import styles from './styles';
import ImageGif from '../public/assets/images/splashscreen.gif'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: true
    };
  }
  async componentWillMount() {

    this.timeout = setInterval(() => {
      this.setState({gif: false});
    }, 5500);
  }

  componentWillUnmount() {

    clearInterval(this.timeout);
  }
  render() {

    return (
      <View style={styles.container}>
        <RootNavigation />
        {this.state.gif &&
        <Image resizeMode="stretch" source={ImageGif}/>
        }
      </View>
    );
  }
}

export default App;
