import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';

export default function TopBar() {
  return (
    <View>
       <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>

    </View>
  )
}