import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 10
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <Image
            style={{ width: 55, height: 50 }}
            source={require("../assets/usb.png")}
          />
        </View>
        <Text style={{ flex: 6, padding: 5, fontWeight: 700, fontSize: 16 }}>
          USB Bluetooth Music Receiver {"\n"}HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={styles.content}>
        <View
          style={{
            flex: 1,
            width: "85%",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 30
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Cực kỳ hài lòng</Text>
          <View
            style={{
              flex: 1,
              gap: 15,
              flexDirection: "row",
              alignItems: "flex-start"
            }}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <Image
                key={index}
                style={{ width: 39, height: 39 }}
                source={require("../assets/Star 1.png")}
              />
            ))}
          </View>
          <TouchableOpacity
            style={{
              flex: 2,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#1511EB"
            }}
          >
            <Image
              style={{ width: 50, height: 40, resizeMode: "contain" }}
              source={require("../assets/camera.png")}
            />
            <Text style={{ fontSize: 18, fontWeight: 700 }}>Thêm hình ảnh</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            width: "85%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <TextInput
            style={{
              flex: 1,
              position: "relative",
              width: "100%",
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#C4C4C4",
              color: "#C4C4C4",
              fontSize: 18,
              fontWeight: 700,
              paddingTop: 10,
              paddingLeft: 20,
              paddingRight: 10
            }}
            placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
            multiline={true}
          />
          <TouchableOpacity
            style={{ position: "absolute", bottom: 10, right: 20 }}
          >
            <Text style={{ fontSize: 12, fontWeight: 700 }}>
              https://meet.google.com/nsj-ojwi-xpp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "85%",
            height: 45,
            backgroundColor: "#0d5db6",
            borderRadius: 10,
            borderColor: "#1511EB",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => navigation.navigate("Screen2_c")}
        >
          <Text style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  content: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    gap: 15
  }
});
