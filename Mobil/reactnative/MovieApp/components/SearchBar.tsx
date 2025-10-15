import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({placeholder , onPress, value, onChangeText} : Props) => {
  return (
    <View className='flex-row items-center rounded-full px-5 py-4 bg-dark-200'>
      <Image 
        source={icons.search} 
        className='size-5' 
        resizeMode='contain'
        style={{ tintColor: '#ab8bff' }}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        placeholderTextColor='#888'
        className='ml-3 flex-1 text-white'
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default SearchBar