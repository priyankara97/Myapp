import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper';
const FlexDemo = () => {
  return (
    <View style={styles.container}>
    <View style={{flex:2,backgroundColor:'blue'}}>
    
      
    </View>
    <View style={{flex:5,backgroundColor:'red',flexDirection:'row'}}>
    
      <View style={{flex:3,backgroundColor:'white',gap:10}}>
    
    
      </View>
    
      <View style={{flex:2,backgroundColor:'yellow',gap:10}}>
    
      </View>
    
    <View style={{flex:1,backgroundColor:'pink',gap:10}}>
    
    
    </View>
    </View>
    
    <View style={{flex:8,backgroundColor:'green'}}>
    <FAB
        icon="message"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    
      
    </View>
    
    </View>
  )
}

export default FlexDemo


const styles =StyleSheet.create({
    container:{
      flex:1
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })