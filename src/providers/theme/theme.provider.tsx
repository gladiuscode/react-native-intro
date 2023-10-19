import React, {createContext, PropsWithChildren, useCallback, useMemo, useState} from "react";
import {useColorScheme} from "react-native";

type Variant = 'light' | 'dark';
type OnVariantChange = (nextVariant: Variant) => void;

interface ThemeContextProps {
  variant: Variant,
  onVariantChange: OnVariantChange,
  colors: {},
  spacings: {},
  typography: {},
}

export const ThemeContext = createContext<ThemeContextProps>({
  variant: 'light',
  onVariantChange: () => {},
  colors: {},
  spacings: {},
  typography: {},
});

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const deviceVariant = useColorScheme() === 'light' ? 'light' : 'dark';
  const [variant, setVariant] = useState<Variant>(deviceVariant);

  console.log('[ThemeProvider] = variant: ', variant);

  const onVariantChange = useCallback<OnVariantChange>(nextVariant => {
    console.log('[ThemeProvider] = onVariantChange = nextVariant: ', nextVariant);
    setVariant(nextVariant);
  }, [variant]);

  const value = useMemo<ThemeContextProps>(() => ({
    variant,
    onVariantChange,
    colors: {},
    spacings: {},
    typography: {},
  }), [variant, onVariantChange]);

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>;
}

export default ThemeProvider;
