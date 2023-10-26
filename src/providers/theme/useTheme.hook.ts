import {useCallback, useContext, useMemo} from "react";
import {ThemeContext} from "./theme.provider";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}

export default useTheme;
