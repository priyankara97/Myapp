import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const LoadData = () => {


  const [data,setData]=useState([]);
const AllData =() =>{

  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setData(json));
}



  return (
  <View>
<Text>Data</Text>

<Button mode='contained' onPress={AllData} >Dataload</Button>

<FlatList
        data={data}
        renderItem={({item}) => {return(
          <View>
            <Text>{item.body}</Text>
          </View>
        )}}
        keyExtractor={item => item.id}
      />
  </View>
  ) 
}

export default LoadData
