import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";

const Map = () => {
  const [pin, setPin] = useState({ longitude: -96.49, latitude: 41.44 });

  return (
    <View style={{ width: "100%" }}>
      <MapView
        style={{
          height: 300,
          width: "100%",
          zIndex: 0,
        }}
        initialRegion={{
          longitude: -96.49,
          latitude: 41.44,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor="#00c8d7"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
