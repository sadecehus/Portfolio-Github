import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const details = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Details of : {id}</Text>
    </View>
  )
}

export default details

const styles = StyleSheet.create({})