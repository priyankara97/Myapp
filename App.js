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
     <TopBar/>
     <BottomBar />
     <BottomBar />
     <BottomBar />
    <Home/>
    </SafeAreaProvider>
  );
};



export default App;

//  start from 1.39 minutes 
