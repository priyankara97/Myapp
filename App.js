import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './Screens/LoginPage';
import AboutUs from './Screens/AboutUs';
import MenuItems from './Components/MenuItems';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';


const App = () => {
  return (
    <SafeAreaProvider>
     <TopBar/>
     <BottomBar/>
    </SafeAreaProvider>
  );
};



export default App;


