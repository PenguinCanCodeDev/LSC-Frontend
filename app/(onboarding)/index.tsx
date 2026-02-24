import LSCIcon from "@/components/svgIcons/LSCIcon";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const route = useRouter()


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <LSCIcon style={{position: 'absolute', top: 100}} />
      </View>


      {/* CHOICE CONTAINER */}
      <View style={styles.bluebox}>

        <View style={styles.authbox}>

          <View style={styles.textBox}>
            <Text style={{color: '#fff', fontSize: 32, textAlign: 'center'}}>Your one stop for everything L300/LSC</Text>
          </View>

          <View style={styles.buttonbox}>
            <TouchableOpacity style={styles.buttonOne} onPress={()=> route.push('/(onboarding)/signUp')}>
              <Text style={{color: '#fff', fontWeight: 600, fontSize: 14}}>Create an account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTwo} onPress={()=> route.push('/(onboarding)/signIn')}>
              <Text style={{color: '#0444B6', fontWeight: 600, fontSize: 14}}>Sign in</Text>
            </TouchableOpacity>
          </View>

        </View>
  

      </View>


    </View>
  );
}



const styles = StyleSheet.create({
     container : {
      backgroundColor: '#fff',
      padding: 0,
      height: '100%'  
     },

     header : {
      alignItems: 'center',
      height: 250,
      justifyContent: 'center'
     },


     bluebox: {
      backgroundColor: '#012265',
      height: '100%',
      borderTopRightRadius: 190,
      borderTopLeftRadius: 190,
      alignItems: 'center'
     },

     authbox:{
      width: 300,
      height: 400,
      position: 'absolute',
      top: 150
     },

     textBox : {
       paddingHorizontal: 17,
       paddingVertical: 30
     },

     buttonbox:{
      width: 240,
      height: 200,
      alignSelf: 'center',
      paddingVertical: 15
     },

     buttonOne: {
      backgroundColor: '#326BFE',
      borderRadius: 25,
      padding: 15,
      alignItems: 'center',
      marginVertical: 8
     },

     buttonTwo: {
      backgroundColor: '#fff',
      borderRadius: 25,
      padding: 15,
      alignItems: 'center',
      marginVertical: 8
     }

})
