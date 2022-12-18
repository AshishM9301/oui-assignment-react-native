import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import CheckBox from "expo-checkbox";
import RenderButton from "../components/RenderButton";

const SignIn = () => {
  const [Email, setEmail] = useState("youremail@website.com");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.lottieViewContainer}>
          <LottieView
            autoplay
            loop
            source={require("../assets/SignInAnimation.json")}
            style={styles.lottieViewStyle}
            //  colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
          />
        </View>
        <Text style={styles.titleTxtStyle}>Welcome Back!</Text>
        <Text style={styles.txtStyle}>Sign in to continue</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/email.png")}
            style={styles.iconStyle}
          />
          <TextInput onChange={setEmail} value={Email} style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/padlock.png")}
            style={styles.iconStyle}
          />
          <TextInput
            onChange={setEmail}
            value={Email}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.flexSContainer}>
          <View style={styles.flexContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checkBoxData}>Remember me</Text>
          </View>

          <TouchableOpacity>
            <Text>Forget password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <RenderButton title="Sign in" />
        </View>

        <View style={styles.flexDContainer}>
          <Text>Already have not an account?</Text>
          <TouchableOpacity>
            <Text style={styles.singUpButton}>Sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 20,
  },
  top: {
    flex: 1,
  },
  lottieViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    marginTop: -50,
  },
  lottieViewStyle: {
    width: "100%",
    height: "100%",
  },
  titleTxtStyle: {
    marginTop: -30,
    fontSize: 21,
    fontWeight: "700",
    color: "#00c8d7",
    textAlign: "left",
  },
  txtStyle: {
    fontSize: 18,
    textAlign: "left",
    marginTop: 5,
  },
  loginContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 10,
    borderRadius: 32,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    borderRadius: 64,
    backgroundColor: "#f3f3f3",
    paddingLeft: 14,
  },
  input: {
    backgroundColor: "#f3f3f3",
    height: 40,
    borderRadius: 64,
    fontSize: 14,
    color: "#313538",
    paddingHorizontal: 20,
    flex: 1,
    // width: "100%",
  },
  iconStyle: {
    width: 10,
    height: 10,
    resizeMode: "cover",
  },
  flexSContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkBoxData: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  flexDContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
  singUpButton: {
    color: "#00c8d7",
    textAlign: "center",
    marginLeft: 10,
  },
});
