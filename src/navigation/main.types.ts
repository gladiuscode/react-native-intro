import {ParamListBase} from "@react-navigation/native";

export enum MainScreen {
  homepage = 'Homepage',
  settings = 'Settings',
  articleDetail = 'ArticleDetail'
}

export interface MainParamList extends ParamListBase {
  [MainScreen.homepage]: undefined;
  [MainScreen.settings]: {
    isAnonymousUser: boolean;
    fromLabel: string;
    hasNotification?: boolean;
  };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainParamList {}
  }
}
