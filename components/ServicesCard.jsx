import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

const ServicesCard = ({ changeMargin }) => {
  const [d, setD] = useState([
    { title: "Lorem, ipsum dolor sit amet consectetur " },
    {
      title: "adipisicing elit. Quisquam dolor eligendi nemo ",
    },
    { title: "sed enim dolorum a. Ratione quod omnis laudantium." },
    { title: "Qui ipsa amet doloremque eum quis explicabo" },
  ]);

  const [readMore, setReadMore] = useState(false);

  const pushData = () => {
    let data = [...d, ...d];
    setD(data);
    changeMargin();
  };

  const popData = () => {
    let data = d.slice(0, 4);
    setD(data);
    changeMargin();
  };

  console.log(readMore, d.length, d);

  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>Services</Text>

      <View>
        {d.map((item, index) => (
          <View key={index + item.title} style={styles.flexContainer}>
            <View style={styles.serviceItemIcon}></View>
            <Text style={styles.serviceItem}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.flexContainer}
          onPress={() => {
            d.length < 8 ? pushData() : popData();
          }}
        >
          <Text>Read {d.length < 8 ? "More" : "Less"}</Text>
          <Icon
            name={d.length < 8 ? "caretdown" : "caretup"}
            size={16}
            color="#00c8d7"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
  },
  titleTxt: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6a6e72",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  serviceItemIcon: {
    width: 6,
    height: 6,
    backgroundColor: "#6a6e72",
    borderRadius: 64,
  },
  serviceItem: {
    marginLeft: 10,
    textTransform: "capitalize",
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
