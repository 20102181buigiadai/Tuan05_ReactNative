import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  CheckBox
} from "react-native";
// import CheckBox from 'react-native-check-box'
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "90%",
          backgroundColor: "#23235B",
          borderRadius: 15
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              width: "70%",
              fontSize: 25,
              fontWeight: 700,
              color: "white",
              textAlign: "center"
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <View>
            <Text>Password length</Text>
            <TextInput />
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23235B",
    color: "white"
  }
});
