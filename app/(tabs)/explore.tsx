import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>explore</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  }
})