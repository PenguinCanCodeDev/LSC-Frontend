import { Tabs } from "expo-router";


export default function TabLayout () {
    return(
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="updates" />
            <Tabs.Screen name="messages" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}