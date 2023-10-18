import React, {memo, PropsWithChildren} from "react";
import {Text, View, TouchableOpacity, GestureResponderEvent} from "react-native";

type Props = PropsWithChildren<{
  id: string,
  onCardPress: (id: string) => void,
  label: string;
}>

const Card = memo<Props>(({ id, label, onCardPress }) => {

  console.log('render card');

  const onPress = () => {
    onCardPress(id);
  }

  return (<TouchableOpacity
    onPress={onPress}
  >
    <Text>{label}</Text>
  </TouchableOpacity>);
});

export default Card
