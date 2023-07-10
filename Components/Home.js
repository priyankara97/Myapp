import { View, Text ,StyleSheet,Image,} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function Home() {
  return (
    <View>
<Button icon="help" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
  <Image
       
        source={require('../assests/headset.jpg')}
        style={styles.img}
      />
<Image 
source={{
    uri:  'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
}}

width={400}
height={200}
/>


<Image
          source={{
            uri: 'https://i.ibb.co/qF8qRnK/upload-1.png',
          }}
          resizeMode='cover'
          style={{height:100, width:100}}
         />

    </View>
    
  )
}

const styles=StyleSheet.create({
    img:{
        width:300,
        height:300
    }

})