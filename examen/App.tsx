import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavegacionComponent from './components/NavegacionComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavegacionComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
