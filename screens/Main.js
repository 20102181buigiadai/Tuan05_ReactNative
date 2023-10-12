import React from "react";
import { View, Button } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View>
      <Button title="2_a" onPress={() => navigation.navigate("Screen2_a")} />
      <Button title="2_b" onPress={() => navigation.navigate("Screen2_b")} />
      <Button title="2_c" onPress={() => navigation.navigate("Screen2_c")} />
      <Button title="Tiki_Ok" onPress={() => navigation.navigate("ScreenTiki_Ok")} />
    </View>
  );
}
