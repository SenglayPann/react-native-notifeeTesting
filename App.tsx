import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.rootContainer}>
      <Button title="Push notification" onPress={undefined} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
