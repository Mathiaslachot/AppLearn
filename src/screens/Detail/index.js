/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import styles from './styles'
import { Button, Icon } from 'react-native-elements';
import imgTop from './../../../public/assets/images/illu.png';
import imgBande from './../../../public/assets/images/bandeopacite.png';
import imgDe from './../../../public/assets/images/bookopacite.png';
import imgRectangle from './../../../public/assets/images/rectangle.png';
import firebase from '../../module/Firebase';
import iconIndicator from './../../../public/assets/images/leemonLoader.png';

export default class Detail extends Component {

  constructor(props) {
    super(props);                               
    this.ref = firebase.firestore().collection('matiere/'+this.props.navigation.state.params.dataMatiere.doc.id+'/modules');
    this.unsubscribe = null;
    this.state = {
      dataMatiere: this.props.navigation.state.params.dataMatiere,
      isLoading: true,
      modules: [],
    };
  }

  onCollectionMatiere = (querySnapshot) => {
    const modules = [];
    querySnapshot.forEach((doc) => {
      const {name} = doc.data();
      modules.push({
        key: modules.id,
        name,
      });
    });
    this.setState({
      modules,
      isLoading: false,
   });
  }

   getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionMatiere);
  }

  render() {
    const matiere = this.state.dataMatiere
    const {modules} = this.state

    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <Image source={iconIndicator} style={styles.logoTopp} resizeMode="stretch" />
        </View>
      )
    }
    return (
      <ScrollView style={{flex:1, flexDirection:'column'}} bounces='false'>
        <Image source={imgTop} style={styles.logoTop} resizeMode="stretch" />
        <Text style={styles.titleTopic}>{matiere.name}</Text>

        <View style={{flexDirection:'row', left:20, top:'20%', flex:1}}>
        <Image source={imgRectangle} style={styles.logoRectangle} />
        <Text style={styles.title}>Chapitres</Text>
        </View>
        <ScrollView style={{flexWrap: 'wrap', left:20, top:'15%', flex:1}}>
        <FlatList
              data={modules}
              contentContainerStyle={{width:'100%'}}
              bounces={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                style={[styles.buttonTouch, {backgroundColor:this.getRandomColor()}]}>
                  <View style={{flexDirection:'row', flex:1}}>
                       <Text style={{color:'white', fontSize:21, left:'50%', top:'4%', fontWeight:'bold'}}>{item.name}</Text>
                       <Image source={imgBande} style={styles.logoBande} resizeMode="stretch" />
                       <Image source={imgDe} style={styles.logoDe} resizeMode="stretch" />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item=>item.name}
            /></ScrollView>
                  <ScrollView style={{height:200, top:200}}></ScrollView>

      </ScrollView>
    );
  }
}
Detail.navigationOptions = () => {
  return {
    title: "Landing Page",
    header: null,
    headerTintColor: 'black',
    headerTintColor: '#ffffff',
  };
};