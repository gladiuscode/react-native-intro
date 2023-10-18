import React, {useCallback, useMemo, useState} from "react";
import { StyleSheet, View, Text } from 'react-native';
import Card from "./src/components/card.component";
import Title from "./src/components/title.component";

export const [counter, setCounter] = useState(0);


export default function App() {

  console.log('render');

  // let titleInfo = {};
  // if (counter === 1) {
  //   titleInfo = {
  //     label: 'Ciao mamma'
  //   }
  // } else {
  //   titleInfo = {
  //     label: 'Ciao papà'
  //   }
  // }

  // useMemo
  const titleInfo = useMemo(() => {
    console.log('render titleInfo')

    if (counter === 1) {
      return {
        label: 'Ciao mamma'
      }
    }
    return {
      label: 'Ciao papà'
    }

    // return {
    //   label: 'Awesome counter di title info'
    // }
  }, [counter]);

  // useCallback
  const onCounterPress = useCallback((id: string) => {
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
  }, [counter]);

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
