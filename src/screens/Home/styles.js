/** @format */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    height:'15%',
    backgroundColor:'transparent',
    top:'10%'
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   activity: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'center'
   },
   buttonTouch: {
    shadowColor: "#000",
     shadowOffset: {
     	width: 0,
     	height: 2,
     },
     shadowOpacity: 0.18,
     shadowRadius: 8.00,
     elevation: 14,
     width:140,
     height:100,
     color:'red',
     marginRight:5,
     marginLeft:17,
     marginTop:30,
     marginBottom:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    margin: 10,
    paddingVertical: 24,
   },
   logoTop:{
    position: 'absolute',
    zIndex: 0,
    alignSelf: 'center',
    right: '0%',
    top: '0%',
   },
   logoCours:{
    width:20,
    height:20,
    left:'70%',
    top:'20%'
   },
   titleTopic: {
    fontSize:30, 
    fontWeight: '900', 
    margin: 40, 
    top: '10%', 
    color:'#343434' 
   }
});
