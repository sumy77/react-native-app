import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.body}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
