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
import imgRectangle from './../../../public/assets/images/rectangle.png';



export default class ListMatiere extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {dataMatiere, data, title,navigation} = this.props;
    console.log({data})
    return (<View style={styles.container}>
        <View style={{flexDirection:'row', left:'4%'}}>
        <Image source={imgRectangle} style={styles.logoRectangle} />
        <Text style={styles.titleTopic}>{title}</Text>
        </View>
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
                onPress={() => {navigation.navigate('Detail', {
                  dataMatiere: item,
                })}}>
                
                  <View>
                       <Text style={{color:'white', fontSize:15, fontWeight:'bold',top:'20%', margin:5}}>{item.name}</Text>
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
