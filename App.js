import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './Screens/LoginPage';
import AboutUs from './Screens/AboutUs';
import MenuItems from './Components/MenuItems';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
import Home from './Components/Home';
import { white } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

import FlexDemo from './Components/FlexDemo';

const App = () => {
  return (
    <SafeAreaProvider>
<LoginPage/>


    </SafeAreaProvider>
  );
};



export default App;



//  start from 1.39 minutes 
