import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsScreen from "../screens/settings/settings.screen";
import HomepageScreen from "../screens/homepage/homepage.screen";
import ArticleDetailScreen from "../screens/articleDetail/articleDetail.screen";
import {MainScreen} from "./main.types";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={MainScreen.homepage} component={HomepageScreen} />
      <Stack.Screen name={MainScreen.settings} component={SettingsScreen} />
      <Stack.Screen name={MainScreen.articleDetail} component={ArticleDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
