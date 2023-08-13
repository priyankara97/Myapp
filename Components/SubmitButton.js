import { View, Text, TouchableOpacity, StyleSheet,  } from 'react-native'
import React from 'react'

const SubmitButton = (props) => {
  return (
    <View>

        <TouchableOpacity style={{...styles.btn,backgroundColor:props.color}} >

{props.name}
<Text>Button</Text>

        </TouchableOpacity>
      
    </View>
  )
}

export default SubmitButton

const styles=StyleSheet.create({
    btn:{
        padding:10,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:200
      
        

    }
})