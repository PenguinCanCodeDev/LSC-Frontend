import { Stack } from "expo-router";



export default function OnboardingScreen(){
    return(
        <Stack
          screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="signIn" />
            <Stack.Screen name="signUp" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="category" />
            <Stack.Screen name="welcome" />

        </Stack>
    )
}