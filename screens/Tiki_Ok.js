import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  const [quanlity, setQuanlity] = useState(1);

  return (
    <View style={{ flex: 1, backgroundColor: "#C4C4C4", marginVertical: 15 }}>
      <View
        style={{
          flex: 9,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            flex: 4,
            width: "90%",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20
          }}
        >
          <Image
            style={{ flex: 3, height: "100%", marginRight: 20 }}
            source={require("../assets/book.png")}
          />
          <View
            style={{
              flex: 5,
              height: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <Text style={{ flex: 1, fontSize: 12, fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 12,
                fontWeight: 700,
                fontWeight: "bold"
              }}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                fontWeight: 700,
                color: "#EE0D0D"
              }}
            >
              141.800 đ
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 12,
                fontWeight: 700,
                color: "gray",
                textDecorationLine: "line-through"
              }}
            >
              141.800 đ
            </Text>
            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  style={{ width: 20 }}
                  onPress={() => {
                    setQuanlity(quanlity - 1);
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/btnminus.png")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    width: 35,
                    fontSize: 12,
                    fontWeight: 700,
                    textAlign: "center"
                  }}
                >
                  {quanlity}
                </Text>
                <TouchableOpacity
                  style={{ width: 20 }}
                  onPress={() => {
                    setQuanlity(quanlity + 1);
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/btnadd.png")}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  fontWeight: "bold",
                  color: "#134FEC"
                }}
              >
                Mua sau
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 30,
            marginHorizontal: 20
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 700, marginLeft: 20 }}>
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#134FEC",
              fontWeight: "bold",
              marginLeft: 20
            }}
          >
            Xem tại đây
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20
          }}
        >
          <View
            style={{
              flex: 7,
              flexDirection: "row",
              height: 50,
              padding: 15,
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderBlockColor: "black",
              borderRadius: 2
            }}
          >
            <View
              style={{
                flex: 1,
                height: "100%",
                backgroundColor: "#F2DD1B",
                justifyContent: "center",
                alignItems: "center"
              }}
            ></View>
            <Text style={{ flex: 4, fontSize: 20, fontWeight: 700 }}>
              Mã giảm giá
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3.5,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0A5EB7",
              borderRadius: 5
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 700, color: "white" }}>
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 10,
          marginHorizontal: 20,
          marginVertical: 15,
          marginLeft: 0,
          backgroundColor: "white"
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: 700 }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#134FEC",
            marginLeft: 10
          }}
        >
          Nhập tại đây?
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 6,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Tạm tính</Text>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#E53935" }}>
            {quanlity * 141800} đ
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <View
            style={{
              width: "100%",
              height: 50,
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 700, color: "#808080" }}>
              Thành tiền
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 700, color: "#E53935" }}>
              {quanlity * 141800} đ
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: "90%",
                backgroundColor: "#E53935",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 700, color: "white" }}>
                TIẾN HÀNH ĐẶT HÀNG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
