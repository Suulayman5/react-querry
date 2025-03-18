import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMovies } from '@/api/movies'
import { useQuery } from '@tanstack/react-query';
import MovieListItems from '@/components/MovieListItems';


interface Movie {
  title: string;
  image: string
  // Add other properties if needed
}

const index = () => {

  // const {data: movies, error, loading} = useQuery({queryKey: ['movies'], queryFn: fetchMovies});

     const {data:movies, error, loading} = useQuery({queryKey: ['movies'], queryFn: fetchMovies})

  // const [movie, setMovie] = useState<Movie[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //     setLoading(true);
  //     const movies = await fetchMovies();

  //     console.log(movies);
  //     setMovie(movies);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setLoading(false);
  //   }
  //   fetchMovie();
  // }, []);
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
    data={movies}
    numColumns={2}
    renderItem={({item}) => (
      <MovieListItems movie={item}/>
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
    padding: 10,
  },  
  con: {
    width: '40%',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },
text : {
  color: 'blue',
  fontSize: 20,

}
})