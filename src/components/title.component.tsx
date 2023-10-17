import React, {memo} from "react";
import {View, Text} from "react-native";

interface Props {
  label: string;
  info: { label: string };
}

const Title: React.FC<Props> = memo(({ label, info }) => {

  console.log('render title');

  return (
    <View>
      <Text>{label}</Text>
      <Text>{info.label}</Text>
    </View>
  );
});

export default Title;
