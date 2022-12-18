import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ServicesCard from "../components/ServicesCard";
import Map from "../components/Map";
import BottomTextInput from "../components/BottomTextInput";

const screen = Dimensions.get("screen");

const DoctorDetails = () => {
  const [rating, setRating] = useState(4.9);
  const [marginData, setMarginData] = useState(false);

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
    setRating(parseFloat(rating));
  }

  const changeMargin = () => {
    setMarginData(!marginData);
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <View style={styles.doctorDetailsContainer}>
          <View style={styles.flexContainer}>
            <View style={styles.left}>
              <View style={styles.imgContainer}>
                <Image
                  source={require("../assets/images/humberto-chavez.jpg")}
                  style={styles.imgStyle}
                />
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxtStyle}>Humberto Chavez</Text>
                  <View style={styles.onlineLogo}></View>
                </View>
                <Text style={styles.detailTxtStyle}>ETN Specilist</Text>
                <View style={styles.ratingContainer}>
                  <Rating
                    showRating={false}
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                    fractions={1}
                    imageSize={15}
                    readonly
                    startingValue={rating}
                    style={styles.ratingStyles}
                  />
                  <Text style={styles.ratingData}>{rating}</Text>
                </View>
                <View>
                  <Text style={styles.txtStyle}>$20.00/hr</Text>
                </View>
              </View>
            </View>

            <View style={styles.right}>
              <Ionicons name="heart" size={20} color="red" />
            </View>
          </View>

          <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
              <View>
                <Text style={styles.txtsm}>100</Text>
                <Text style={styles.txtxs}>Review</Text>
              </View>
              <View style={styles.border}></View>
              <View>
                <Text style={styles.txtsm}>500</Text>
                <Text style={styles.txtxs}>Ongoing</Text>
              </View>
              <View style={styles.border}></View>
              <View>
                <Text style={styles.txtsm}>700</Text>
                <Text style={styles.txtxs}>Patient</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt}>Buy Now!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.messageContainer}>
                <Icon name="message-text" size={16} color="#00c8d7" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.servicesCardContainer}>
          <ServicesCard changeMargin={changeMargin} />
        </View>
      </View>
      {/* 
      <View style={{ marginTop: !marginData ? 320 : 233 }}>
       
      </View> */}

      <View style={styles.bottomData}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 20,

            top: -30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>
                  Distance
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>2.10 Km</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: "600" }}>Time</Text>
                <Text style={{ fontSize: 12, fontWeight: "400" }}>20 min</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#b1ebef",
                height: 30,
                width: 30,
                borderRadius: 64,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Icon name="arrow-top-right-thick" size={20} color="#00c8d7" />
            </View>
          </View>
          <View
            style={{ height: 1, width: "100%", backgroundColor: "#000" }}
          ></View>
          <BottomTextInput />
        </View>
      </View>
    </View>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    //padding: 20,
    position: "relative",
    minHeight: screen.height,
  },
  doctorDetailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    zIndex: 1,
  },
  flexContainer: { flexDirection: "row", justifyContent: "space-between" },
  left: { flexDirection: "row" },
  imgContainer: {},
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 12,
  },
  detailsContainer: { marginLeft: 10 },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameTxtStyle: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "500",
  },
  onlineLogo: {
    width: 8,
    height: 8,
    backgroundColor: "lightgreen",
    borderRadius: 64,
    marginLeft: 10,
  },
  detailTxtStyle: {
    color: "#6a6e72",
    fontSize: 12,
    marginTop: 2,
  },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  ratingStyles: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 3,
  },
  ratingData: {
    marginLeft: 5,
    color: "#6a6e72",
    fontSize: 12,
    fontWeight: "700",
  },
  txtStyle: {
    color: "#00c8d7",
    marginTop: 2,
    fontSize: 14,
    fontWeight: "700",
  },
  txtsm: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6a6e72",
    marginTop: 10,
    textAlign: "center",
  },
  txtxs: {
    fontSize: 10,
    textAlign: "center",
  },
  border: {
    width: 1,
    backgroundColor: "#f3f3f3",
    marginHorizontal: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#00c8d7",
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 64,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  messageContainer: {
    backgroundColor: "#f3f3f3",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    width: 30,
    height: 30,
  },
  servicesCardContainer: {
    marginTop: 15,
    zIndex: 1,
  },
  bottomData: {
    borderRadius: 12,

    zIndex: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderRadius: 10,

    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
