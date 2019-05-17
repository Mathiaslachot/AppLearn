/**
 * @format
 * @flow
 */

import * as React from 'react';
import {createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {Easing, Animated, Image} from 'react-native';
import {appRoutes, authRoutes, homeRoutes} from './';
import Ionicons from 'react-native-vector-icons/Ionicons';
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 250,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};

const configApp = {
  headerStyle: {
    backgroundColor: 'red',
  },
  transitionConfig,
  cardStyle: {
    backgroundColor: '#fff',
  },
};
const InnerApp = createStackNavigator(appRoutes, configApp);

const AppDeateail = createStackNavigator(authRoutes, configApp);
const App = createBottomTabNavigator(

  {
     //tabBarComponent: props => <BottomTabBar {...props} style={{borderTopColor: '#605F60'}} />,
    Home: InnerApp,
    Zest: AppDeateail,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor,}) => {
        
        const {routeName} = navigation.state;
          switch (routeName) {
            case 'Home':
              return <Image style={{height:20, width:20, top:'25%'}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/serviceapp-1f3c5.appspot.com/o/IconTopics.png?alt=media&token=15a24732-6834-43a2-b08b-34f7d1963356'}} />;
            case 'Zest':
            return <Image style={{height:30, width:30, top:'13%'}} resizeMode='contain' source={{uri:'https://firebasestorage.googleapis.com/v0/b/serviceapp-1f3c5.appspot.com/o/IconZest.png?alt=media&token=5b79f770-dedb-47fe-a7e5-5c3938aff333'}} />;
            default:
              break;
          
      }
    }
    }),
    tabBarVisible: false,
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#fff',
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    },
  },
);

let RootNavigation = createSwitchNavigator(
  {
    App: App,
  },
  {
    initialRouteName: 'App',
  },
);

RootNavigation = createAppContainer(RootNavigation);

export default RootNavigation;
