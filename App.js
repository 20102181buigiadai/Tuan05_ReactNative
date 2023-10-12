import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Thay đổi từ '@react-navigation/native-stack'

import MainScreen from "./screens/Main"; // Đảm bảo tên file và đường dẫn đúng
import Screen2_a from "./screens/2_a";
import Screen2_b from "./screens/2_b";
import Screen2_c from "./screens/2_c";
import ScreenTiki_Ok from "./screens/Tiki_Ok";

// Import các màn hình khác tương tự

const Stack = createNativeStackNavigator(); // Thay đổi từ '@react-navigation/native-stack'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Main" component={MainScreen} /> */}
        <Stack.Screen name="Screen2_a" component={Screen2_a} />
        <Stack.Screen name="Screen2_b" component={Screen2_b} />
        <Stack.Screen name="Screen2_c" component={Screen2_c} />
        <Stack.Screen name="ScreenTiki_Ok" component={ScreenTiki_Ok} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
