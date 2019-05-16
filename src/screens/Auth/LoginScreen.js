import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from './../../module/firebaseAPI';
export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }


  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        navigation.navigate('Screen');
      }
    });
  }

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }



  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:20, color:'white', bottom:'20%'}}>Connectez-vous à votre espace :)</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={this.state.email}
              clearButtonMode='always'
              autoCapitalize = 'none'
              onChangeText={(text) => this.setState({email: text})}
              autoCorrect={false}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              clearButtonMode='always'
              autoCapitalize = 'none'
              placeholder='Password'
              autoCorrect={false}/>
        </View>

        <View style={{justifyContent:'space-around', flexDirection:'row', width:'100%', top:'5%'}}>

        <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => {this.createUser()}}>
            <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={() => this.signIn()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:'50%',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  registerButton: {
    backgroundColor: "white",
  },
  registerText: {
    color: '#00b5ec',
  }
});

LoginScreen.navigationOptions = () => {

    return {
      title: "Login",
      headerStyle: {
        backgroundColor: 'rgb(44, 182, 244)',
      },
      headerTintColor: '#fff',
      headerTintColor: '#ffffff',
      
    };
  };