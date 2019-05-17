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
    bottom:35,
    width:'30%',
    left:'30%'
   },
   logoDe:{
    left:'100%',
    width:'15%',
    height:'90%'
    },
   titleTopic: {
    fontSize:30, 
    fontWeight: '900', 
    margin: 40, 
    top: '10%', 
    color:'#343434' 
   },
   title: {
    fontSize:17, 
    fontWeight: 'bold', 
    color:'#343434',
    left:'9.8%',
    top:'6%'
   },
   button: {
    backgroundColor: 'rgb(44, 182, 244)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 16,
    marginBottom:10,
    paddingVertical: 24,
    height: 100,
    width: '90%',
  },
  buttonTop: {
    backgroundColor: 'rgb(44, 182, 244)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 16,
    margin: 10,
    paddingVertical: 24,
    width: '27%',
    height:'70%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginLeft:10
  },
  logoRectangle:{
    top:8, right:10, left: 2
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
    backgroundColor: 'rgb(44, 182, 244)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 16,
    marginBottom:10,
    paddingVertical: 24,
    height: 100,
    width: '90%',
  },
  logoTopp:{
   height:200,
   width:360
  }
});
