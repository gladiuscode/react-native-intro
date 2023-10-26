import React from "react";
import {View, Text} from "react-native";
import CustomButton from "../../components/customButton.component";
import {useNavigation} from "@react-navigation/native";

const ArticleDetailScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>ArticleDetailScreen</Text>
      <CustomButton id={'goBack'} label={'Indietro'} onTouchPress={navigation.goBack} />
    </View>
  );
}

export default ArticleDetailScreen;
