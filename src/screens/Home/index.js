/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import { Text, ScrollView, ActivityIndicator, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { List, ListItem, Button, Icon  } from 'react-native-elements';
import styles from './styles'
import firebase from '../../module/Firebase';
import imgTop from './../../../public/assets/images/illu.png';
import ListMatiere from './../ListMatiere'


export default class Home extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('matiere');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      matieres: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionMatiere);
  }

  onCollectionMatiere = (querySnapshot) => {
    const matieres = [];
    querySnapshot.forEach((doc) => {
      const { name, description, color, icon } = doc.data();
      matieres.push({
        key: matieres.id,
        doc,
        name,
        description,
        color,
        icon
      });
    });
    this.setState({
      matieres,
      isLoading: false,
   });
  }

  render() {

const {matieres} = this.state

const coursDesign = matieres.filter(cours => cours.description === 'Web Design')
const coursTrans = matieres.filter(cours => cours.description === 'Enseignements transverses')
const coursDev = matieres.filter(cours => cours.description === 'Web Development')
const coursBusiness = matieres.filter(cours => cours.description === 'E-Business')
console.log({matieres})


    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }

    
    return (
        <ScrollView style={{flex:1, flexDirection:'column'}} bounces='false'>
        <Image source={imgTop} style={styles.logoTop} resizeMode="stretch" />
        <Text style={styles.titleTopic}>Les Topics</Text>
        <ListMatiere
        navigation={this.props.navigation}
        dataMatiere={this.state.matieres}
        data={coursDev}
         title='Web Development'
        />
        <ListMatiere
        navigation={this.props.navigation}
        dataMatiere={this.state.matieres}
        data={coursBusiness}
        title='E-Business'
        />
        <ListMatiere
        navigation={this.props.navigation}
        dataMatiere={this.state.matieres}
        data={coursTrans}
         title='Enseignements transverses'
        />
        <ListMatiere
        dataMatiere={this.state.matieres}
        navigation={this.props.navigation}
        data={coursDesign}
         title='Web Design'
        />
        <View style={{height:100, top:100}}></View>
        </ScrollView>
        

    );
        }
      }


Home.navigationOptions = () => {
  return {
    title: "Landing Page",
    header: null,
    headerTintColor: 'black',
    headerTintColor: '#ffffff',
  };
};