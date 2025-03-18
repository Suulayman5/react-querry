import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieListItems = ({movie}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={{uri: 'https://image.tmdb.org/t/p/w500'+ movie.poster_path}} style={{width: '90%', height: 310}}/>
      <Text>{movie.title}</Text>
    </View>
  )
}

export default MovieListItems

const styles = StyleSheet.create({
})