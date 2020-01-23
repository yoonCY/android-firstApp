import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation'; // 추가된 코드
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import NavigationService from '../common/Navigation'

import Home from './main/HomeScreen'

const AppTabNavigator = createMaterialTopTabNavigator({
  HomeTab:{ screen: Home },
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor:'white'
    },
    iconStyle: { 
      ...Platform.select({
        ios:{
          height: 35,
          marginBottom: 20 
        }
      }) 
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
      header: null
    }
  
    render() {
      return (
        <AppTabContainet
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
   