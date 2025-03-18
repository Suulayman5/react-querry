import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'

const MovieDeatails = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>MovieDeatails: {id}</Text>
    </View>
  )
}

export default MovieDeatails

const styles = StyleSheet.create({})