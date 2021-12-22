import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
import About from './About'
import Header from '../shared/Header'

export default function Root() {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: () => <Header title='GameZone' />,
        }}
      />
      <Drawer.Screen
        name='About'
        component={About}
        options={{
          headerTitle: () => <Header title='About GameZone' />,
        }}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})
