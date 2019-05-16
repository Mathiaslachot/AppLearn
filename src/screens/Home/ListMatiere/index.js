/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import { Text, ScrollView, ActivityIndicator, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './styles'



export default class ListMatiere extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {dataMatiere, data, title} = this.props;
    console.log({data})
    return (<View style={styles.container}>
        <Text style={styles.titleTopic}>{title}</Text>
        <ScrollView style={styles.scroll}>
          <FlatList
              contentContainerStyle={{alignSelf:'flex-start', backgroundColor:'transparent'}}
              numColumns={Math.round(dataMatiere.length / 2)}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                style={[styles.buttonTouch, {backgroundColor:item.color}]}
               
                onPress={() => {
                         this.props.navigation.navigate('Deatil', {
                           boardkey: `${JSON.stringify(item.key)}`,
                         });
                       }}>
                  <View>
                       <Text style={{color:'white', fontSize:15, fontWeight:'bold',top:'20%'}}>{item.name}</Text>
                       <Image source={{uri:item.icon}} style={styles.logoCours} />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item=>item.name}
            />
        </ScrollView></View>

    );
        }
      }
