import React, { useState } from 'react'
import { Text, View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Sample = ({ navigation }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [password, setPassword] = useState('');


    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return (
        <View>
            <View style={{ marginTop: 20, marginLeft: 10 }}>
                <Pressable
                    onPress={() => navigation.navigate("Home3")}
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require("../img/back.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </Pressable>
            </View>

            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 30, fontWeight: '800', color: 'black' }}>Welcome Back</Text>
                <Text style={{ marginTop: 5 }}>Welcome Back!! Please Enter Your Detalis</Text>
            </View>

            <View style={{ marginLeft: 5, marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 14, fontWeight: '900' }}>Email</Text>
                <TextInput
                    placeholder='Enter Your Email'
                    style={{
                        height: 45,
                        margin: 12,
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                //onChangeText={onChangeNumber}
                //value={number}
                //keyboardType="numeric"

                />
            </View>

            <View style={{ marginLeft: 5 }}>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: 14, fontWeight: '900' }}>Password</Text>
                <TextInput
                    style={{
                        height: 45,
                        margin: 12,
                        padding: 10,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                    name="password"
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity 
                style={{
                    marginTop:-50,
                    marginLeft:325,
                }}
                onPress={handlePasswordVisibility}
                >
                    <Icon name="eye" size={30} color="#0C8A7B"/>
                </TouchableOpacity>
            </View>

        </View >
    )
}
export default Sample;