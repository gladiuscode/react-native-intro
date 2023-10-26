import {ParamListBase} from "@react-navigation/native";

export enum MainTabsScreen {
  homepage = 'Discover',
  settings = 'Settings',
}

export interface MainBottomTabsParamList extends ParamListBase {
  [MainTabsScreen.homepage]: {},
  [MainTabsScreen.settings]: {
    isAnonymousUser: boolean;
    fromLabel: string;
    hasNotification?: boolean;
  };
}
