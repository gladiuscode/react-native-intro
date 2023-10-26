import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleDetailScreen from "../screens/articleDetail/articleDetail.screen";
import {MainScreen} from "./main.types";
import MainBottomTabs from "./bottomTabs/main.bottomTabs";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={MainScreen.tabs} component={MainBottomTabs} />
      <Stack.Screen name={MainScreen.articleDetail} component={ArticleDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
