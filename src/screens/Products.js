import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const Products = ({ route, navigation }) => {
  const { name } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
