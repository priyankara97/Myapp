import { View, Text,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';

const LoadAll = () => {

  const [data,setData]= useState([])

  const LoadData =()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setData(json));
  }
  return (

    <View>
      <Text>LoadData</Text> 

      <Button mode='contained' onPress={LoadData}>Load data</Button> 

         <FlatList
        data={data}
        renderItem={({item}) => {return (
          <View>

            <Text>{item.title}</Text>
          </View>
        )} }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default LoadAll