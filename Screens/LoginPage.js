import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const LoginPage = () => {
 

  return (
    <View style={styles.container}>


      <View style={{ flex: 4, backgroundColor: "brown", padding: 15 }}>
        <Image

          source={require('../assests/logo.jpeg')}
          style={styles.img}
        />
      </View >
      <View style={{ flex: 3, backgroundColor: "yellow" ,padding:15}}>
      <TextInput
      label="Login"
     
      mode='flat'
     
    />
    <Text>{'\n'}</Text>
      <TextInput
      label="password"
     
      mode='flat'
      secureTextEntry={true}
    />
      </View>
      <View style={{ flex: 6 }}>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      </View>

    </View>
  )
}

export default LoginPage


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  img: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',


  }
})







