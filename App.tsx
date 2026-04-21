import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalButton from './app/components/CalButton';

export default function App() {
  return (
    <View style={stylemyStyles.container}>
      <CalButton title='1' />
      <CalButton title='2' />
      </View>
  );
}

const stylemyStyles = StyleSheet.create({
  container: { padding: 50, flexDirection: 'column' },
});
