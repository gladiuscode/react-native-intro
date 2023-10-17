import React, {useState} from "react";
import { StyleSheet, View, Text } from 'react-native';
import Card from "./src/components/card.component";
import Title from "./src/components/title.component";

export default function App() {
  const [counter, setCounter] = useState(0);

  console.log('render');

  // useMemo
  const titleInfo = {
    label: 'Awesome counter di title info'
  }

  // useCallback
  const onCounterPress = (id: string) => {
    if (id === 'increment') {
      console.log(
        'Incrementa state counter', counter
      );

      setCounter(counter + 1);
      return;
    }

    console.log(
      'non so cosa fare'
    );
  }

  return (
    <View style={styles.container}>
      <Title label={'Awesome Counter'} info={titleInfo} />
      <Card id={'increment'} label={'Incrementa counter'} onCardPress={onCounterPress}  />
      <Text>{counter}</Text>
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
