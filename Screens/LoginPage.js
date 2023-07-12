import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const LoginPage = () => {


  return (
    <View style={styles.container} >


      <View style={{ flex: 2, padding: 15, alignContent: "center", alignItems: "center" }}>
        <Image

          source={require('../assests/logo.jpeg')}
          style={styles.img}
        />
      </View >
      <View style={{ flex: 3, padding: 15 }}>
        <TextInput
          label="Username"

          mode='flat'
          style={{ backgroundColor: "white", marginBottom: 5 }}
        />

        <TextInput
          label="password"

          mode='flat'
          secureTextEntry={true}
          style={{ backgroundColor: "white", marginTop: 6 }}
        />

        <Text style={{ textDecorationLine: "underline", marginTop: 8, textAlign: "right" }}>Forgot Password</Text>
      </View>
      <View style={{ flex: 6, padding: 15, marginTop: 50 }}>
        <Text>
          <TouchableOpacity style={{ height: 50 }}>
            <Text style={{ fontSize: 16, color: "black", backgroundColor: "white", borderColor: 'blue', borderWidth: 1, padding: 10, width: 280, height: 40, textAlignVertical: "center", textAlign: "center" }}>Login</Text>
          </TouchableOpacity   >
          <View style={{ flex: 1, textAlign: "right" }}>
            <Text style={{ marginTop: 8 }} >Or</Text>
          </View>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>

          <Text>{'\n'}</Text>

          <TouchableOpacity style={{ height: 50 }}>
            <Text style={{ fontSize: 16, color: "black", backgroundColor: "white", borderColor: 'blue', borderWidth: 1, padding: 10, width: 280, height: 40, textAlignVertical: "center", textAlign: "center" }}>Login with Facebook</Text>
          </TouchableOpacity>

          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>

          <TouchableOpacity style={{ height: 50 }}>
            <Text style={{ fontSize: 16, color: "black", backgroundColor: "white", borderColor: 'blue', borderWidth: 1, padding: 10, width: 280, height: 40, textAlignVertical: "center", textAlign: "center" }}>Register</Text>
          </TouchableOpacity>

        </Text>
      </View>

    </View>
  )
}

export default LoginPage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderColor: "balck",
    borderWidth: 1,
    margin: 12,
    borderRadius: 10
  },

  img: {
    width: 80,
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',

  },

})







