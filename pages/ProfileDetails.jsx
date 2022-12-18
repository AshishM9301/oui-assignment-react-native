import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import RenderButton from "../components/RenderButton";

const ProfileDetails = () => {
  const [Name, setName] = useState("Wiliam Jonson");
  const [Number, setNumber] = useState("+880 000 111 333");
  const [Email, setEmail] = useState("youremail@website.com");
  const [Address, setAddress] = useState(
    "North Kianna, 73445 Lew Plains, Wisconsin"
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/person.jpeg")}
            style={styles.imgStyle}
          />
          <Text style={styles.imgText}>Jhon Smitha</Text>
          <View style={styles.account}>
            <Text style={styles.accountTxt}>Account Credit:</Text>
            <Text style={styles.accountData}> $200.00</Text>
          </View>
        </View>

        <View>
          <View style={styles.inputContainer}>
            <TextInput onChange={setName} value={Name} style={styles.input} />
            <Image
              source={require("../assets/images/pen-icon.png")}
              style={styles.iconStyle}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              onChange={setNumber}
              value={Number}
              style={styles.input}
            />
            <Image
              source={require("../assets/images/pen-icon.png")}
              style={styles.iconStyle}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput onChange={setEmail} value={Email} style={styles.input} />
            <Image
              source={require("../assets/images/pen-icon.png")}
              style={styles.iconStyle}
            />
          </View>

          <View style={styles.addressInputContainer}>
            <TextInput
              multiline
              numberOfLines={4}
              onChange={setAddress}
              value={Address}
              style={styles.addressInput}
              maxLength={40}
            />
            <Image
              source={require("../assets/images/pen-icon.png")}
              style={styles.iconStyle}
            />
          </View>

          <View style={styles.buttonContainer}>
            <RenderButton title="Save Now" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",

    padding: 20,
  },
  profileContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 32,
    borderRadius: 24,
  },
  imgContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 64,
    resizeMode: "cover",
  },
  imgText: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
  },
  account: { flexDirection: "row", alignItems: "center" },
  accountTxt: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
    textAlign: "center",
  },
  accountData: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "#00c8d7",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    borderRadius: 64,
    backgroundColor: "#f3f3f3",
    paddingRight: 10,
  },
  addressInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    borderRadius: 20,
    backgroundColor: "#f3f3f3",
    paddingRight: 10,
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
  addressInput: {
    backgroundColor: "#f3f3f3",
    height: 60,
    borderRadius: 20,
    fontSize: 14,
    color: "#313538",
    paddingHorizontal: 20,
    flex: 1,
  },
  iconStyle: {
    width: 10,
    height: 10,
    resizeMode: "cover",
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: -20,
  },
});
