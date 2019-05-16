/** @format */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    top:'10%',
   },
   titleTopic: {
    fontSize:17, 
    fontWeight: 'bold', 
    color:'#343434',
    left:'4.8%',
    top:'6%'
   },
   scroll: {
    flexWrap: 'wrap',
    height:'15%',
    backgroundColor:'transparent',
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
     width:140,
     height:100,
     color:'red',
     marginRight:5,
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
    
   }
});
