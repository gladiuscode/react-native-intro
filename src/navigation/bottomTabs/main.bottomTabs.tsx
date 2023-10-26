import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MainTabsScreen} from "./main.bottomTabs.types";
import HomepageScreen from "../../screens/homepage/homepage.screen";
import SettingsScreen from "../../screens/settings/settings.screen";

const Tabs = createBottomTabNavigator();

const MainBottomTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tabs.Screen name={MainTabsScreen.homepage} component={HomepageScreen} />
      <Tabs.Screen name={MainTabsScreen.settings} component={SettingsScreen} />
    </Tabs.Navigator>
  );
}

export default MainBottomTabs;
