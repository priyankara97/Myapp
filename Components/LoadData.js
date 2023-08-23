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
  
  fetch('https://imdb-top-100-movies.p.rapidapi.com',{
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fbde58c11emsh0d4113cae575a79p1d39d1jsn698c0f813aec',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  })

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
            <Text>{item.rating}</Text>
          </View>
        )}}
        keyExtractor={item => item.id}
      />
  </View>
  )
}

export default LoadData
// 1.40 minutes wathed 