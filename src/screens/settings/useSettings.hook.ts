import useTheme from "../../providers/theme/useTheme.hook";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {useCallback} from "react";
import {MainScreen} from "../../navigation/main.types";
import {SettingsProps} from "./settings.screen";

const useSettings = () => {
  const themeContext = useTheme();
  const route = useRoute<SettingsProps['route']>();


  console.log('route.params.isAnonymousUser', route.params?.isAnonymousUser);

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

  return {
    variantOutputLiteral,
    variant: themeContext.variant,
    onTouchPress,
    onBackToHomepage,
  }
}

export default useSettings;
