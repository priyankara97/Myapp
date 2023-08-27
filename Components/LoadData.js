import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import {
  BallIndicator,

} from 'react-native-indicators';

const LoadData = () => {


  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const[isLoaded,setIsLoaded]=useState(false);

  useEffect(() => {
     AllData();
    //console.log("hello")
  }, [])

  const AllData = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    
      .then((response) => response.json())
      .then((json) => setData(json));
      setIsLoaded(true);
  }



  return (
    <View>
      {isLoaded ? <View>

        <Button mode='contained' onPress={AllData} >Dataload</Button>
        <TextInput mode='outlined' placeholder='enter your email' onChangeText={(t) => { setName(t) }}></TextInput>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.version}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id}
        />
      </View>: < BallIndicator color='red'/>}
  </View>
  )
}

export default LoadData
// 1.40 minutes wathed 