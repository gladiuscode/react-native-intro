import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Title from "../../components/title.component";
import {useNavigation, useRoute} from "@react-navigation/native";
import CustomButton from "../../components/customButton.component";
import {MainScreen} from "../../navigation/main.types";

const HomepageScreen = () => {

  const isAnonymousUser = false;

  const navigation = useNavigation();

  const onNavigateToSettings = (id: string) => {
    navigation.navigate(
      MainScreen.settings,
      { isAnonymousUser, fromLabel: 'Homepage' }
    );
  }

  return (
    <View>
      <Title label={'Homepage'} />
      <CustomButton id={'navigateToSettings'} label={'Open Settings'} onTouchPress={onNavigateToSettings} />

      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardArticleTitle}>Scarpe Nike</Text>
          <Text style={styles.cardArticlePrice}>200 €</Text>
        </View>

        <CustomButton
          style={styles.cardButton}
          id={'navigateToDetail'}
          label={'Vai al dettaglio'}
          onTouchPress={(id: string) => {
            console.log('touch', id)
            navigation.navigate(MainScreen.articleDetail);
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 120,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  cardArticleTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 8,
  },
  cardArticlePrice: {
    fontSize: 24,
    fontWeight: '500',
    color: 'green',
  },
  cardButton: {
    height: 24,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default HomepageScreen;
