import React from 'react';

import { Pressable, Text, StyleSheet, View } from 'react-native';

type Props={
title:string,
}

export default function CalButton(props:Props) {
  return (
    <Pressable
      style={stylemyStyles.buttonStyle}
      onPress={() => console.log('black button pressed')}
    >
      <Text style={stylemyStyles.text}>{props.title}</Text>
    </Pressable>
  );
}

const stylemyStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: 70,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
