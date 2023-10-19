import React from "react";
import {View} from 'react-native';
import ThemeProvider from "./src/providers/theme/theme.provider";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <ThemeProvider>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
