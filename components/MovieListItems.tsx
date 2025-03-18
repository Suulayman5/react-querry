import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieListItems = ({movie}) => {
  return (
    <Link href={`/${movie.id}`} asChild={true}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w500'+ movie.poster_path}} style={{width: '90%', height: 310}}/>
        <Text>{movie.title}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieListItems

const styles = StyleSheet.create({
})