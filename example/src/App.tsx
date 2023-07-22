import * as React from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';
import { awake } from 'react-native-wake-on-lan';

export default function App() {
  const [macAddress, setMacAddress] = React.useState('74:56:3C:37:6F:02');

  const onPress = () => {
    awake(macAddress, 9);
  };

  const onChangeText = (v: string) => setMacAddress(v);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type mac address"
        value={macAddress}
        onChangeText={onChangeText}
      />
      <Button onPress={onPress} title="Awake" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
