import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import PassEye from "../svgIcons/passwordEye"

interface InputBoxProps {
    text : string,
    placeholder : string,
    value : string,
    onChangeText: (text: string) => void
}



export default function InputBoxPass({text, placeholder, value, onChangeText} : InputBoxProps){

    const [isSecure, setIsSecure] = useState<boolean>(true)

    const setSecure = () =>{
        setIsSecure(!isSecure)
    }


    return (

        <View style={styles.inputBox}>
        <View>
        <Text style={styles.inputText}>{text}</Text>
        <TextInput placeholder= {placeholder} placeholderTextColor={'#C9C9C9'} secureTextEntry={isSecure}
          value={value} onChangeText={onChangeText}
        />
        </View>

        <TouchableOpacity style={styles.inputPass} onPress={setSecure}>
        <PassEye />
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: '#F2F2F2',
        marginVertical: 8,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
     },

     inputText : {
        color: '#0444B6',
        fontSize: 13,
        fontWeight: 600,
        top: 6
     },

     inputPass :{
        alignSelf: 'center',
        marginRight: 8
     }
})