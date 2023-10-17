import React, {PropsWithChildren} from "react";
import {Text, View, TouchableOpacity, GestureResponderEvent} from "react-native";

type Props = PropsWithChildren<{
  id: string,
  onPress: (id: string) => void,
  label: string;
}>

const Card: React.FC<Props> = ({ id, label, onPress }) => {

  const onLocalPress = () => {
    onPress(id);
  }

  return (<TouchableOpacity
    onPress={onLocalPress}
  >
    <Text>{label}</Text>
  </TouchableOpacity>);
}

export default Card
