import {ParamListBase} from "@react-navigation/native";
import {MainBottomTabsParamList} from "./bottomTabs/main.bottomTabs.types";

export enum MainScreen {
  tabs = 'Tabs',
  articleDetail = 'ArticleDetail'
}

export interface MainStackParamList extends ParamListBase, MainBottomTabsParamList {
  [MainScreen.tabs]: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
