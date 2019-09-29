import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home'
  // tabBarIcon: ({ focused }) => (
  //   <Icon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

HomeStack.path = '';

const ExploreStack = createStackNavigator(
  {
    Links: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore'
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};

ExploreStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings'
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
