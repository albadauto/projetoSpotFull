import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs' 
import { Entypo } from  '@expo/vector-icons'
import Home from './pages/Home/Index';
import Musicas from './pages/Musicas/Index';
import Login from './pages/Login/Index';

export default function Routes() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator 
      barStyle={{backgroundColor:"#333"}}
      activeColor="#fff"
    >
      <Tab.Screen 
      name='Home' 
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" color={color} size={26}/>
        )
      }}
      />
      <Tab.Screen 
      name='Musicas' 
      component={Musicas} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="music" color={color} size={26} />
        )
      }}
      />
      <Tab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarIcon: ({color, size}) => (
          <Entypo name="login" color={color} size={26} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})