import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const LoadData = () => {


    const LoadData =()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));

    }
  return (
    <View>
      <Text>LoadData</Text>

      <Button mode='contained'>Load data</Button>
    </View>
  )
}

export default LoadData