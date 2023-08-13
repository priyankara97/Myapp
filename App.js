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
import LoadData from './Components/LoadAll';
import RoundButton from './Components/RoundButton';
import SubmitButton from './Components/SubmitButton';
import SaveData from './Components/SaveData';


const App = () => {
  return (
    <SafeAreaProvider>
      {/* <AboutUs/> */}
      <View style={{flex:1}}>
<LoadData/>
      {/* <View  style={{justifyContent:"center",alignItems:"flex-end",felx:2}}>
        <Text>
       <SubmitButton color="orange"/>
        </Text>
      <SaveData/>
       
      </View>
      <View  style={{justifyContent:"center",alignItems:"left",flex:2}}>
        <Text>
       <SubmitButton color="blue"/>
        </Text>
       
      </View>
      <View  style={{justifyContent:"center",alignItems:"center",flex:2}}>
        <Text>
       <SubmitButton color="red"/>
        </Text>
       
      </View>

    */}

      </View>
     
      {/* <View >
        <RoundButton  name="click me" style={{backgroundColor:"red",padding: 20,borderRadius:20,justifyContent: 'center',alignItems:"center"}} />
      
      </View>

      <View style={{justifyContent: 'center',alignItems:"center"}}>
        <RoundButton  name="click me" style={{backgroundColor:"blue",padding: 20,borderRadius:20,width:100,marginTop:20,justifyContent: 'center',alignItems:"center"}} />
      
      </View> */}

    </SafeAreaProvider>
  );
};



export default App;



//  start from 1.39 minutes 
