import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./pages/Main";
import ProfileDetails from "./pages/ProfileDetails";
import SignIn from "./pages/SignIn";
import DoctorDetails from "./pages/DoctorDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileDetails}
          options={{ title: "Profile Details" }}
        />
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="doctor"
          component={DoctorDetails}
          options={{ title: "Doctor Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
