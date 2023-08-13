import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const SaveData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

  return (
    <View>
      <Button mode='contained' onLongPress={(SaveData)}>  Save</Button>
    </View>
  )
}

export default SaveData