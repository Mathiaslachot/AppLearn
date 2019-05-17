/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles'
import imgTop from './../../../public/assets/images/illu.png';
import imgBande from './../../../public/assets/images/bandeopacite.png';
import imgDe from './../../../public/assets/images/dice.png';
import imgRectangle from './../../../public/assets/images/rectangle.png';


export default class Zest extends Component {

  goToNextPage = () => {
    const {navigation} = this.props;
    navigation.navigate('Zest');
  };

  render() {
    return (
      <ScrollView style={{flex:1, flexDirection:'column'}}>
       <Image source={imgTop} style={styles.logoTop} resizeMode='contain' />
       <Text style={styles.titleTopic}>Les Zests</Text>
       <View style={{flex:1}}>

       <View style={{flexDirection:'row', left:20, top:'20%', flex:0.5}}>
        <Image source={imgRectangle} style={styles.logoRectangle} />
        <Text style={styles.title}>Les plus joués</Text>
        </View>

        <View style={{flex:0.5, top:'25%', flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={[styles.buttonTop, {backgroundColor: '#FEA8DC'}]}>
            <View>
            <Text numberOfLines={1} style={styles.buttonText}>
              React
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:14}]}>
            ~5 mn
            </Text>
            <Image source={imgDe} style={[styles.logoDe, {height:'80%', width:'35%',left: '60%',top: '65%',}]} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonTop, {backgroundColor: '#9D91FF'}]}>
            <View>
            <Text numberOfLines={2} style={styles.buttonText}>
              Data Intelligence
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:14}]}>
            ~5 mn
            </Text>
            <Image source={imgDe} style={[styles.logoDe, {height:'60%', width:'35%',left: '60%',top: '60%',}]} resizeMode="stretch" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonTop, {backgroundColor: '#FF7DA6'}]}>
            <View>
            <Text numberOfLines={2} style={styles.buttonText}>
              Business Model
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:14}]}>
            ~5 mn
            </Text>
            <Image source={imgDe} style={[styles.logoDe, {height:'60%', width:'35%',left: '60%',top: '60%',}]} resizeMode="stretch" />

          </View>
        </TouchableOpacity>
        </View>

        </View>
       <View style={{flex:1, top: '15%', left:'5%', marginBottom:200}}>
       <TouchableOpacity style={[styles.button, {backgroundColor: '#fdc473'}]}>
            <View>
            <Text numberOfLines={1} style={styles.buttonText}>
              Un Zest d'UX
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:12, fontStyle:'italic', fontWeight:'300' }]}>
              Design sprint, user stories, workflow
            </Text>
            </View>
            <Image source={imgBande} style={styles.logoBande} resizeMode="stretch" />
            <Image source={imgDe} style={styles.logoDe} resizeMode="stretch" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#ffa3da'}]}>
        <View>
            <Text numberOfLines={1} style={styles.buttonText}>
              Un Zest d'Histoiredu Web
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:12, fontStyle:'italic', fontWeight:'300' }]}>
              Tim Berners-Lee, arpanet, www
            </Text>
            </View>
            <Image source={imgBande} style={styles.logoBande} resizeMode="stretch" />
            <Image source={imgDe} style={styles.logoDe} resizeMode="stretch" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#aeef74'}]}>
        <View>
            <Text numberOfLines={1} style={styles.buttonText}>
              Un Zest de PHP
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:12, fontStyle:'italic', fontWeight:'300' }]}>
              Fonction objet, boucle, database
            </Text>
            </View>
            <Image source={imgBande} style={styles.logoBande} resizeMode="stretch" />
            <Image source={imgDe} style={styles.logoDe} resizeMode="stretch" />

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#F7896A'}]}>
        <View>
            <Text numberOfLines={1} style={styles.buttonText}>
              Un Zest de JS
            </Text>
            <Text numberOfLines={1} style={[styles.buttonText, {fontSize:12, fontStyle:'italic', fontWeight:'300' }]}>
            Fonction objet, boucle, database
            </Text>
            </View>
            <Image source={imgBande} style={styles.logoBande} resizeMode="stretch" />
            <Image source={imgDe} style={styles.logoDe} resizeMode="stretch" />

        </TouchableOpacity>
       </View>
      </ScrollView>
    );
  }
}

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