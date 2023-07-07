import { View, Text, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import RoundButton from '../Components/RoundButton'
export default function LoginPage() {
  return (
    <View>
      <Text>LoginPage</Text>
      <RoundButton/>
    

      
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />



    <Image
      
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  
});






  
}