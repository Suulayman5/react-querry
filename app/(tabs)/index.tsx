import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMovies } from '@/api/movies'


interface Movie {
  title: string;
  // Add other properties if needed
}

const index = () => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
      setLoading(true);
      const movies = await fetchMovies();

      console.log(movies);
      setMovie(movies);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchMovie();
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )};
    if (error) {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
        </View>
      )};
  
  return (
    <View style={styles.container}>
    <FlatList
    data={movie}
    renderItem={({item}) => (
      <View>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    )}
    />
  )
  </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
text : {
  color: 'blue',
  fontSize: 20,
}
})