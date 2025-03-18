import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMovies } from '@/api/movies'
import { useQuery } from '@tanstack/react-query';


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
      <View style={styles.con}>
        <Text style={styles.text}>{item.title}</Text>
        {/* <Image source={{uri: item.image}} style={{width: 100, height: 100}} /> */}
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