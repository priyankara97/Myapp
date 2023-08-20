import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const LoadData = () => {


  const [data,setData]=useState([]);
  const [name,setName]=useState('');

useEffect (()=>{
  // AllData();
  console.log("hello")
},[])

const AllData =() =>{

  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setData(json));
}



  return (
  <View>
<Text>Data</Text>

<Button mode='contained' onPress={AllData} >Dataload</Button>
<TextInput mode='outlined' placeholder='enter your email' onChangeText={(t)=>{setName(t)}}></TextInput>
<FlatList
        data={data}
        renderItem={({item}) => {return(
          <View>
            <Text>{item.title}</Text>
          </View>
        )}}
        keyExtractor={item => item.id}
      />
  </View>
  )
}

export default LoadData
// 1.40 minutes wathed 