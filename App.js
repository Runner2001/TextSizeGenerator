import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [textsize, setTextsize] = useState(16);

  const decreaseHandler = () => {
    if (textsize > 10) {
      setTextsize(textsize - 2)
    } else {
      Alert.alert('Too much', 'Text size can\'t be smaller than 0px. It will invisible', [{ text: 'Ok', style: 'cancel', onPress: () => setTextsize(16) }])
    }
  }

  const increaseHandler = () => {
    if (textsize < 60) {
      setTextsize(textsize + 2)
    } else {
      Alert.alert('Too much', 'Text size bigger than 60 is too big for a device like smart phones.', [{ text: 'Ok', style: 'cancel', onPress: () => setTextsize(16) }])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 32 }}>Text Size Generator</Text>
      <Text style={{ fontSize: textsize, marginBottom: 56 }}>{textsize}</Text>
      <View style={{ flexDirection: 'row', width: '80%', justifyContent: "space-around" }}>
        <View style={{ width: '45%' }}>
          <Button title="Decrease" color={'#B3261E'} onPress={decreaseHandler} />
        </View>
        <View style={{ width: '45%' }}>
          <Button title="Increase" onPress={increaseHandler} />
        </View>
      </View>
      <StatusBar style="auto" />
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
