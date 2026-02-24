import { StyleSheet, Text, TextInput, View } from "react-native"

interface InputBoxProps {
    text : string,
    placeholder : string,
    value : string,
    onChangeText : (text: string)=> void
}

export default function InputBox({text, placeholder, value, onChangeText} : InputBoxProps){
    return (

        <View style={styles.inputBox}>
        <Text style={styles.inputText}>{text}</Text>
        <TextInput placeholder= {placeholder} placeholderTextColor={'#C9C9C9'}
         value={value} onChangeText={onChangeText}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: '#F2F2F2',
        marginVertical: 6,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 3,
     },

     inputText : {
        color: '#0444B6',
        fontSize: 13,
        fontWeight: 600,
        top: 6
     }
})