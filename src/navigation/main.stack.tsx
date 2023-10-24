import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreen} from "./main.types";
import SettingsScreen from "../screens/settings/settings.screen";
import HomepageScreen from "../screens/homepage/homepage.screen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={MainScreen.homepage} component={HomepageScreen} />
      <Stack.Screen name={MainScreen.settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
