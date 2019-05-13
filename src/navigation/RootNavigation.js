/**
 * @format
 * @flow
 */

import * as React from 'react';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import {Easing, Animated} from 'react-native';
import {appRoutes} from './';

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


const App = createStackNavigator(appRoutes, configApp);

let RootNavigation = createSwitchNavigator(
  {
    App,
  },
  {
    initialRouteName: 'App',
  },
);

RootNavigation = createAppContainer(RootNavigation);

export default RootNavigation;
