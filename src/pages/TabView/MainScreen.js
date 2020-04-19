import HomeScreen from '../../pages/HomeScreen'
import PhotoScreen from '../../pages/PhotoScreen'
import ProfileScreen from '../../pages/ProfileScreen'
import NotificationScreen from '../../pages/NotificationScreen'
import SearchScreen from '../../pages/SearchScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
const Tab = createMaterialBottomTabNavigator()

export default function MainScreen () {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#1A1a1a' }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarIcon: 'home', tabBarLabel: '' }} />
      <Tab.Screen name='SearchScreen' component={SearchScreen} options={{ tabBarIcon: 'magnify', tabBarLabel: '' }} />
      <Tab.Screen name='PhotoScreen' component={PhotoScreen} options={{ tabBarIcon: 'plus-box', tabBarLabel: '' }} />
      <Tab.Screen name='NotificationScreen' component={NotificationScreen} options={{ tabBarIcon: 'heart-outline', tabBarLabel: '' }} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ tabBarIcon: 'account', tabBarLabel: '' }} />
    </Tab.Navigator>
  )
}
