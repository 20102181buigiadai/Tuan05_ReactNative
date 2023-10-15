import React, { useState } from "react";
import { View, Text, TouchableOpacity, CheckBox } from "react-native";
import { TextInput } from "react-native-web";

export default function App({navigation}) {
  const [check, setCheck] = useState([true,false,true,false]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#3B3B98" }}>
      <View
        style={{
          flex: 1,
          width: "90%",
          height:"90%",
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
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ width: "90%", height: "60%", backgroundColor: "#151537" }}
          ></Text>
        </View>
        <View
          style={{
            flex: 8,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              width: "90%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ flex: 9, fontSize: 20, fontWeight: 700, color: "white" }}
            >
              Password length
            </Text>
            <TextInput
              style={{
                width: "40%",
                height: 35,
                backgroundColor: "white",
                fontSize: 20,
                fontWeight: 600
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              width: "90%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ flex: 9, fontSize: 20, fontWeight: 700, color: "white" }}
            >
              Include lower case letters
            </Text>
            <CheckBox
            checkedColor="blue"
              value={check[0]}
              onValueChange={() => {
                const newSelection = [...check];
                newSelection[0] = !newSelection[0];
                setCheck(newSelection);
              }}
              style={{ width: 30, height: 30 }}
              color="black"  
            />
          </View>

          <View
            style={{
              flex: 1,
              width: "90%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ flex: 9, fontSize: 20, fontWeight: 700, color: "white" }}
            >
              Include upcase letters
            </Text>
            <CheckBox
              value={check[1]}
              onValueChange={() => {
                const newSelection = [...check];
                newSelection[1] = !newSelection[1];
                setCheck(newSelection);
              }}
              style={{ width: 30, height: 30 }} color="black" 
            />
          </View>

          <View
            style={{
              flex: 1,
              width: "90%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ flex: 9, fontSize: 20, fontWeight: 700, color: "white" }}
            >
              Include number
            </Text>
            <CheckBox
              value={check[2]}
              onValueChange={() => {
                const newSelection = [...check];
                newSelection[2] = !newSelection[2];
                setCheck(newSelection);
              }}
              style={{ width: 30, height: 30 }} color="black" 
            />
          </View>

          <View
            style={{
              flex: 1,
              width: "90%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{ flex: 9, fontSize: 20, fontWeight: 700, color: "white" }}
            >
              Include special symbol
            </Text>
            <CheckBox
              value={check[3]}
              onValueChange={() => {
                const newSelection = [...check];
                newSelection[3] = !newSelection[3];
                setCheck(newSelection);
              }}
              style={{ width: 30, height: 30 }} color="black" 
            />
          </View>
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "#3B3B98",
              justifyContent: "center",
              alignItems: "center"
            }}
           onPress={() => navigation.navigate("ScreenTiki_Ok")}
          >
            <Text style={{ fontSize: 18, fontWeight: 700, color: "white" }}>
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
