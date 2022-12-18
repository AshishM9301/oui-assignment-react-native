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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RenderButton from "../components/RenderButton";
import ServicesCard from "../components/ServicesCard";
import MapView, { Provider } from "react-native-maps";
import Map from "../components/Map";

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
    <ScrollView style={styles.container}>
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

      <View style={{ marginTop: !marginData ? 320 : 233 }}>
        <Map />
      </View>

      <View>
        <TextInput
          placeholder="Address"
          style={{
            marginTop: -40,
            zIndex: 1,
            backgroundColor: "#fff",
            height: 40,
            borderRadius: 10,
            paddingHorizontal: 12,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 20,
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
});
