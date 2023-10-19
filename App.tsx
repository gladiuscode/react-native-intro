import React from "react";
import {View} from 'react-native';
import ThemeProvider from "./src/providers/theme/theme.provider";
import SettingsScreen from "./src/screens/settings/settings.screen";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <ThemeProvider>
        <SettingsScreen />
      </ThemeProvider>
    </View>
  );
}
