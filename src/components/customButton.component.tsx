import React, {memo} from "react";
import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  id: string;
  label: string;
  disabled?: boolean;
  onTouchPress: (id: string) => void;
}

const CustomButton = memo<Props>(({ style, id, label, disabled = false, onTouchPress }) => {

  const onPress = () => onTouchPress(id);

  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
})

export default CustomButton;
