/** @format */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logoTop:{
    position: 'absolute',
    zIndex: 0,
    alignSelf: 'center',
    right: '0%',
    top: '0%',
   },
   logoBande:{
    },
   titleTopic: {
    fontSize:30, 
    fontWeight: '900', 
    margin: 40, 
    top: '10%', 
    color:'#343434' 
   },
   button: {
    backgroundColor: 'rgb(44, 182, 244)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 16,
    margin: 16,
    paddingVertical: 24,
    height: 100,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
});
