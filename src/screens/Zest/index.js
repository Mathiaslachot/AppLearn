/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles'
import imgTop from './../../../public/assets/images/illu.png';
import imgBande from './../../../public/assets/images/bandeopacite.png';


export default class Zest extends Component {

  goToNextPage = () => {
    const {navigation} = this.props;
    navigation.navigate('Zest');
  };

  render() {
    return (
      <ScrollView style={{flex:1, flexDirection:'column'}}>
       <Image source={imgTop} style={styles.logoTop} resizeMode="stretch" />
       <Text style={styles.titleTopic}>Les Zests</Text>
       <View style={{flex:1, top: '10%', left:'6%'}}>
       <TouchableOpacity style={[styles.button, {backgroundColor: '#fdc473'}]}>
            <Text numberOfLines={1} style={styles.buttonText}>
              Un Zest d'UX
            </Text>
            <Image source={imgBande} style={styles.logoTop} resizeMode="stretch" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#ffa3da'}]}>
            <Text numberOfLines={1} style={styles.buttonText}>
            Un Zest d'Histoiredu Web
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#aeef74'}]}>
            <Text numberOfLines={1} style={styles.buttonText}>
            Un Zest de PHP
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#F7896A'}]}>
            <Text numberOfLines={1} style={styles.buttonText}>
            Un Zest de Js
            </Text>
        </TouchableOpacity>
       </View>
      </ScrollView>
    );
  }
}
Zest

Zest.navigationOptions = () => {
  return {
    title: "Zest",
    headerStyle: {
      backgroundColor: 'green',
    },
    header: null,
    headerTintColor: '#ffffff',
  };
};