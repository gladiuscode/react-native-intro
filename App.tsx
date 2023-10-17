import { StyleSheet, View } from 'react-native';
import Card from "./src/components/card.component";

export default function App() {

  const onPress = (id: string) => {
    if (id === 'increment') {
      console.log(
        'Incrementa state counter'
      );
      // TODO: INCREMENT STATE;
      return;
    }

    console.log(
      'non so cosa fare'
    );
  }

  return (
    <View style={styles.container} >
      <Card id={'reset'} label={'Incrementa counter'} onPress={onPress}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
