import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({id , poster_path, title,vote_average ,release_date} : Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
    <>
      <Image source={{uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/150 '}}
       className='w-full h-52 rounded-lg'
       resizeMode='cover'/>
      <Text className='text-white text-md font-bold my-1' numberOfLines={1}>{title}</Text>

      <View className='flex-row justify-start items-center gap-x-1'>
       <Image source={icons.star} className='size-4 bottom-0'/>
       <Text className='text-white text-xs font-bold uppercase'>{Math.floor(vote_average * 10)/10} / 10</Text>
      </View>
      <View>
        <Text className='text-gray-400 text-xs text-light-300 font-medium mt-1'>{release_date.split('-')[0]}</Text>
      </View>
      
    </>
    </TouchableOpacity>
    </Link>
  )
}

export default MovieCard