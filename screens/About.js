import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ex
        autem veritatis beatae eius, asperiores rerum fugit necessitatibus totam
        illum nesciunt quos? Natus adipisci dolores pariatur minima voluptates
        est fugit!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
