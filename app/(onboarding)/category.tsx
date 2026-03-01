import ProgramChoice from "@/components/Reusables/ProgramChoice";
import BackIcon from "@/components/svgIcons/backIcon";
import CheckIcon from "@/components/svgIcons/checkIcon";
import LSCIcon from "@/components/svgIcons/LSCIcon";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategorySelect() {

    const [program, setProgram] = useState<string>('L300')
    const [success, setSuccess] = useState<boolean>(false)

  const route = useRouter()

  const handleDone = ()=>{
    setSuccess(true)
    setTimeout(() => {
        route.push('/(tabs)/home')
    }, 2500);
  }

  if (success) {
    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <View style={styles.whitebox}>
                <LSCIcon style={{ alignSelf: 'center', position: 'absolute', top: 40 }} />
                <View style={styles.successBox}>
                    <CheckIcon />
                    <Text style={styles.successText}>Welcome aboard, Champion!</Text>
                </View>
            </View>
        </View>
    )
}


  return (
    <View style={styles.container}>

     <View style={styles.header} />

      {/* INPUT DETAILS CONTAINER */}
      <View style={styles.whitebox}>
      <LSCIcon style={{alignSelf: 'center', position: 'absolute', top: 40}} />


        <View style={styles.authbox}>

          <View style={styles.textBox}>
            <TouchableOpacity style={{paddingVertical: 15}} onPress={()=>route.back()}>
                <BackIcon />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 600}}>One last thing</Text>
            <Text style={{color: '#636363', fontWeight: 400}}>We just have to get this right. Remeber, LSC is final year <Text style={{color: 'orange'}}>ONLY</Text></Text>

            <View style={{paddingVertical: 15}}>
                <ProgramChoice
                 options={["Leadership 300 (L300)", "Life Success Centre (LSC)"]}
                 value={program}
                 onValueChange={setProgram}
                />
            </View>
          </View>



          <View style={styles.buttonbox}>
            <TouchableOpacity style={styles.buttonOne} onPress={handleDone}>
              <Text style={{color: '#fff', fontWeight: 600, fontSize: 14}}>Done</Text>
            </TouchableOpacity>

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
       paddingVertical: 20,
       height: 430,
     },

     buttonbox:{
      width: 320,
      height: 200,
      alignSelf: 'center',
      paddingVertical: 40,
      flex: 1,
      justifyContent: 'flex-end'
     },

     buttonOne: {
      backgroundColor: '#2AA104',
      borderRadius: 25,
      padding: 16,
      alignItems: 'center',
      marginVertical: 8
     },

     successBox: {
        position: 'absolute',
        top: 200,
        alignItems: 'center',
        gap: 24,
     },

     successText: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#111',
        maxWidth: 240,
     }

})
