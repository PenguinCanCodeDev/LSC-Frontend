import LSCIcon from "@/components/svgIcons/LSCIcon";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const route = useRouter()


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <LSCIcon />
      </View>


      {/* CHOICE CONTAINER */}
      <View style={styles.bluebox}>

        <TouchableOpacity onPress={()=> route.push('/(tabs)/home')}>
          <Text>Click here to go to tabs</Text>
        </TouchableOpacity>

        

      </View>


    </View>
  );
}



const styles = StyleSheet.create({
     container : {
        
     },

     header : {

     },


     bluebox: {

     }

})
