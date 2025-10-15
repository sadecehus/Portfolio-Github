import { icons } from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  return (
    
    <View className='items-center justify-center'>
      {focused ? (
        <ImageBackground
      
          className='flex bg-[#171717] border-b border-white flex-row w-full min-w-[112px] min-h-16 justify-center items-center rounded-xl overflow-hidden'
        >
          <Image source={icon} tintColor='#fdfdfd' className='size-5 text-white' />
          <Text className='text-white text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground>
      ) : (
        <Image source={icon} tintColor='gray' className='size-6' />
      )}
    </View>
  )
}
const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle: { 
        backgroundColor: 'black',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        height: 56,
        position: 'absolute',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor:'black'
  

       },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      tabBarItemStyle: { 
        marginTop: 10 ,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      
      },
      
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          )
        }}
      />
      <Tabs.Screen 
        name="search" 
        options={{
          title: 'search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          )
        }}
      />
      <Tabs.Screen 
        name="saved" 
        options={{
          title: 'saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          )
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          )
        }}
      />
    </Tabs>
  )
}

export default _layout