import React, {memo} from "react";
import {View, Text} from "react-native";

interface Props {
  label: string;
}

const Title: React.FC<Props> = memo(({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
});

export default Title;
