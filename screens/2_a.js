import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <Text
          style={{
            fontSize: "30px",
            color: "#000000",
            fontWeight: "bold",
            marginTop: 82
          }}
        >
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <View style={styles.containerInput}>
          <Image
            style={styles.imgFirst}
            source={require("../assets/avatar_user 1.png")}
            resizeMode="contain"
          />
          <TextInput
            style={{
              flex: 9,
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "roboto",
              marginLeft: 10
            }}
            placeholder="Name"
          />
        </View>
        <View style={styles.containerInput}>
          <Image
            style={styles.imgFirst}
            source={require("../assets/Group.png")}
            resizeMode="contain"
          />

          <TextInput
            style={{
              flex: 7,
              fontSize: 18,
              fontWeight: 400,
              fontFamily: "roboto",
              marginLeft: 10
            }}
            placeholder="Password"
          />
          <Image
            style={{ flex: 2, width: 32, height: 32 }}
            source={require("../assets/eye.png")}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={{ flex: 3, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 45,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
         
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: 700 }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 3,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontWeight: 700,
              marginTop: 30
            }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00"
  },
  containerInput: {
    flexDirection: "row",
    marginBottom: 20,
    width: "90%",
    height: 54,
    alignItems: "center",
    backgroundColor: "#DDBE3C",
    //Viền Input
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1
  },
  imgFirst: {
    flex: 1,
    width: 32,
    height: 32
  }
});
