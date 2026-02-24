import CampusModal from "@/components/Reusables/campusModal";
import InputBox from "@/components/Reusables/inputBox";
import BackIcon from "@/components/svgIcons/backIcon";
import LSCIcon from "@/components/svgIcons/LSCIcon";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileReg() {

    const [department, setDepartment] = useState<string>('')
    const [matNo, setMatNo] = useState<string>('')
    const [faculty, setFaculty] = useState<string>('')
    const [campus, setCampus] = useState<string>('')



  const route = useRouter()


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
            <Text style={{ fontSize: 20, fontWeight: 600}}>Almost done...</Text>
            <Text style={{color: '#636363', fontWeight: 400}}>Let&apos;s get you set up</Text>

            <View style={{paddingVertical: 15}}>
                <InputBox text="Department" placeholder="Computer Science" value={department} onChangeText={setDepartment} />
                <InputBox text="Mat No" placeholder="SCN/CSC/2XXXXX" value={matNo} onChangeText={setMatNo} />
                <InputBox text="Faculty" placeholder="Computing" value={faculty} onChangeText={setFaculty} />
                <CampusModal text="Campus" placeholder="select" value={campus} onValueChange={setCampus} options={[
                    {label: "Heritage (Ugbor)", value: "Heritage"},
                    {label:"Legacy (Okha)", value: "Legacy"},
                ]}
                />
            </View>
          </View>



          <View style={styles.buttonbox}>
            <TouchableOpacity style={styles.buttonOne} onPress={()=> route.push('/(onboarding)/category')}>
              <Text style={{color: '#fff', fontWeight: 600, fontSize: 14}}>Next</Text>
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
      backgroundColor: '#326BFE',
      borderRadius: 25,
      padding: 16,
      alignItems: 'center',
      marginVertical: 8
     },

})
