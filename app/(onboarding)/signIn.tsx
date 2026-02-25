import InputBox from "@/components/Reusables/inputBox";
import InputBoxPass from "@/components/Reusables/inputBoxPass";
import LSCIcon from "@/components/svgIcons/LSCIcon";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const route = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      {/* INPUT DETAILS CONTAINER */}
      <View style={styles.whitebox}>
        <LSCIcon
          style={{ alignSelf: "center", position: "absolute", top: 40 }}
        />

        <View style={styles.authbox}>
          <View style={styles.textBox}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Welcome back</Text>
            <Text style={{ color: "#636363", fontWeight: 400 }}>
              It&apos;s good to have you
            </Text>

            <View style={{ paddingVertical: 15 }}>
              <InputBox
                text="Email"
                placeholder="name @gmail.com"
                value={email}
                onChangeText={setEmail}
              />
              <InputBoxPass
                text="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={styles.buttonbox}>
            <TouchableOpacity
              style={styles.buttonOne}
              onPress={() => route.push("/(tabs)/home")}
            >
              <Text style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>
                Sign in
              </Text>
            </TouchableOpacity>

            <View style={{ paddingVertical: 5 }}>
              <Text style={{ alignSelf: "center" }}>
                Don&apos;t have an account yet?
                <Link
                  href={"/(onboarding)/signUp"}
                  style={{ color: "#326BFE" }}
                >
                  {" "}
                  Sign up
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#012265",
    height: "100%",
  },

  header: {
    paddingVertical: 50,
  },

  whitebox: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    alignItems: "center",
  },

  authbox: {
    width: 330,
    height: 600,
    position: "absolute",
    top: 150,
  },

  textBox: {
    paddingHorizontal: 4,
    paddingVertical: 30,
    height: 300,
  },

  buttonbox: {
    width: 320,
    height: 200,
    alignSelf: "center",
    paddingVertical: 40,
    flex: 1,
    justifyContent: "flex-end",
  },

  buttonOne: {
    backgroundColor: "#326BFE",
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    marginVertical: 8,
  },
});
