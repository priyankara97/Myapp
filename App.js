import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './Screens/LoginPage';
import AboutUs from './Screens/AboutUs';
import MenuItems from './Components/MenuItems';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
import Home from './Components/Home';


const App = () => {
  return (
    <SafeAreaProvider>
<View style={styles.container}>
<View style={{flex:2,backgroundColor:'blue'}}>

  
</View>
<View style={{flex:5,backgroundColor:'red'}}>

  
</View>

<View style={{flex:8,backgroundColor:'green'}}>

  
</View>

</View>
    </SafeAreaProvider>
  );
};



export default App;


const styles =StyleSheet.create({
  container:{
    flex:1
  }
})

//  start from 1.39 minutes 
