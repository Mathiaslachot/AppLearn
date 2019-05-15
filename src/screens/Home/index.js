/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, Icon  } from 'react-native-elements';
import styles from './styles'
import firebase from '../../module/Firebase';

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
      const { name, description } = doc.data();
      matieres.push({
        key: matieres.id,
        doc,
        name,
        description,
      });
    });
    this.setState({
      matieres,
      isLoading: false,
   });
  }

  goToNextPage = () => {
    const {navigation} = this.props;
    navigation.navigate('Deatil');
  };

  render() {

if (this.state.matieres) {
  const matieres = this.state.matieres
  console.log({matieres})
}

    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (

        // <ScrollView style={styles.container}>
        //   <List>
        //     {
        //       this.state.matieres.map((item, i) => (
        //         <ListItem
        //           key={i}
        //           title={item.name}
        //           onPress={() => {
        //             this.props.navigation.navigate('Deatil', {
        //               boardkey: `${JSON.stringify(item.key)}`,
        //             });
        //           }}
        //         />
        //       ))
        //     }
        //   </List>
        // </ScrollView>

        <View style={styles.container}>
          <FlatList
              data={this.state.matieres}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => {
                         this.props.navigation.navigate('Deatil', {
                           boardkey: `${JSON.stringify(item.key)}`,
                         });
                       }}>
                <ListItem
                chevronColor="black"
                chevron
                title={item.name}
                />
                </TouchableOpacity>
              )}
              keyExtractor={item=>item.name}
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