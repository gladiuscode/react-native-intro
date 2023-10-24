import React from "react";
import {Text, View} from "react-native";
import Title from "../../components/title.component";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../components/customButton.component";
import {MainScreen} from "../../navigation/main.types";

const HomepageScreen = () => {

  const navigation = useNavigation();

  const onNavigateToSettings = (id: string) => {
    navigation.navigate(MainScreen.settings);
  }

  return (
    <View>
      <Title label={'Homepage'} />
      <CustomButton id={'navigateToSettings'} label={'Open Settings'} onTouchPress={onNavigateToSettings} />
    </View>
  );
}

export default HomepageScreen;
