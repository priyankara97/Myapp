import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Component } from 'react';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';


export default function AboutUs() {
  const [name, setName] = useState('')
  const [number ,setNumber]=useState('')
  const [email, setEmail] = useState('')


  const SaveData=()=>{
    
  }
  
  return (
    <View>

      <PacmanIndicator />
      <TextInput
        label="Name"

        onChangeText={(data) => { setNumber(data) }}
      />
       <TextInput
        label="Phone number"

        onChangeText={(data) => { setName(data) }}
      />
      <TextInput
        label="Email"

        onChangeText={(data) => { setEmail(data) }}
      />
      <Text style={{ marginLeft: 10 }}>

        <Button icon="camera" mode="contained" onPress={() => console.log(email, name,number )}>
          Press me
        </Button>

      </Text>





    </View>
  )
}