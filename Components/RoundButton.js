import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButton(props) {
  return (
    <View >


      <TouchableOpacity style={props.style}>
      <Text >{props.name}</Text>
      </TouchableOpacity>
     
    </View>
  )
}