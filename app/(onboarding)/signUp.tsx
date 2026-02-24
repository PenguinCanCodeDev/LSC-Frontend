import InputBox from "@/components/Reusables/inputBox";
import InputBoxPass from "@/components/Reusables/inputBoxPass";
import LSCIcon from "@/components/svgIcons/LSCIcon";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    const [firstLastName, setFirstLastNmae] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPass, setConfirmPass] = useState<string>('')



  const route = useRouter()


  return (
    <View style={styles.container}>

     <View style={styles.header} />

      {/* INPUT DETAILS CONTAINER */}
      <View style={styles.whitebox}>
      <LSCIcon style={{alignSelf: 'center', position: 'absolute', top: 40}} />


        <View style={styles.authbox}>

          <View style={styles.textBox}>
            <Text style={{ fontSize: 20, fontWeight: 600}}>First time here?</Text>
            <Text style={{color: '#636363', fontWeight: 400}}>Let&apos;s get you set up </Text>

            <View style={{paddingVertical: 15}}>
                <InputBox text="First Name and Last Name" placeholder="John Doe" value={firstLastName} onChangeText={setFirstLastNmae} />
                <InputBox text="Email" placeholder="name @gmail.com" value={email} onChangeText={setEmail} />
                <InputBoxPass text="Passowrd" placeholder="Enter your password" value={password} onChangeText={setPassword} />
                <InputBoxPass text="Confirm password" placeholder="Re-enter your password" value={confirmPass} onChangeText={setConfirmPass} />
            </View>
          </View>



          <View style={styles.buttonbox}>
            <TouchableOpacity style={styles.buttonOne} onPress={()=> route.push('/(onboarding)/profile')}>
              <Text style={{color: '#fff', fontWeight: 600, fontSize: 14}}>Next</Text>
            </TouchableOpacity>

             <View style={{paddingVertical: 5}}>
            <Text style={{alignSelf: 'center'}}>Already have an account?
                <Link href={'/(onboarding)/signIn'} style={{color: '#326BFE'}}> Sign in</Link></Text>
            </View>
            
          </View>

        </View>
  

      </View>


    </View>
  );
}



const styles = StyleSheet.create({
     container : {
      backgroundColor: '#012265',
      height: '100%',  
     },

     header : {
        paddingVertical: 50
     },


     whitebox: {
      backgroundColor: '#fff',  
      height: '100%',
      borderTopRightRadius: 200,
      borderTopLeftRadius: 200,
      alignItems: 'center'
     },

     authbox:{
      width: 330,
      height: 600,
      position: 'absolute',
      top: 150,
     },

     textBox : {
       paddingHorizontal: 4,
       paddingVertical: 30,
       height: 430,
     },

     buttonbox:{
      width: 320,
      height: 200,
      alignSelf: 'center',
      paddingVertical: 40,
      flex: 1,
      justifyContent: 'flex-end',
     },

     buttonOne: {
      backgroundColor: '#326BFE',
      borderRadius: 25,
      padding: 16,
      alignItems: 'center',
      marginVertical: 8
     },

})
