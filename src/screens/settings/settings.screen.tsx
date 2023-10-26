import React from "react";
import {Text, View} from "react-native";
import Title from "../../components/title.component";
import CustomButton from "../../components/customButton.component";
import useSettings from "./useSettings.hook";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainParamList, MainScreen} from "../../navigation/main.types";
import {useNavigation, useRoute} from "@react-navigation/native";

export type SettingsProps = NativeStackScreenProps<MainParamList, MainScreen.settings>;

const SettingsScreen = () => {
  const {
    variantOutputLiteral,
    variant,
    onTouchPress,
    onBackToHomepage,
  } = useSettings();

  const objectA = {
    ciao: 'ciao',
    age: 12,
  }

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <Text>{variantOutputLiteral}</Text>
      <Title label={'Hello World'} />
      <CustomButton id={'change-theme-variant'} label={`Passa a tema: ${variant === 'light' ? 'Scuro' : 'Chiaro'}`} onTouchPress={onTouchPress} />
      <CustomButton id={'goBackToHomepage'} label={'Vai alla homepage'} onTouchPress={onBackToHomepage} />
    </View>
  );
}

export default SettingsScreen;
