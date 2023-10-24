import React from "react";
import {View} from 'react-native';
import ThemeProvider from "./src/providers/theme/theme.provider";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./src/navigation/main.stack";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <ThemeProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}
