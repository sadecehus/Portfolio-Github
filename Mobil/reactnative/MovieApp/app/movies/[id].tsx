
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const movieDetails = () => {
  return (
    <View className='h-screen flex justify-center items-center w-full'>
      <Text>movieDetails</Text>
      <Link className='' href='/'>Go to Home</Link>
    </View>
  )
}

export default movieDetails