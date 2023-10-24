import React, {useCallback, useContext} from "react";
import {Text, View} from "react-native";
import Title from "../../components/title.component";
import {ThemeContext} from "../../providers/theme/theme.provider";
import CustomButton from "../../components/customButton.component";
import {useNavigation} from "@react-navigation/native";

const SettingsScreen = () => {

  const themeContext = useContext(ThemeContext);
  const variantOutputLiteral = `L'app utilizza il tema: ${themeContext.variant}`;
  console.log('[SettingsScreen] themeContext.variant', themeContext.variant);
  const nextVariant = themeContext.variant === 'dark' ? 'light' : 'dark';
  console.log('[SettingsScreen]', nextVariant);

  const navigation = useNavigation();

  const onTouchPress = useCallback((id: string) => {
    if (id === 'change-theme-variant') {
      console.log('[SettingsScreen] = onTouchPress = nextVariant:', nextVariant);
      themeContext.onVariantChange(nextVariant);
      return;
    }
  }, [nextVariant]);

  const onBackToHomepage = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>{variantOutputLiteral}</Text>
      <Title label={'Hello World'} />
      <CustomButton id={'change-theme-variant'} label={`Passa a tema: ${themeContext.variant === 'light' ? 'Scuro' : 'Chiaro'}`} onTouchPress={onTouchPress} />
      <CustomButton id={'goBackToHomepage'} label={'Vai alla homepage'} onTouchPress={onBackToHomepage} />
    </View>
  );
}

export default SettingsScreen;
