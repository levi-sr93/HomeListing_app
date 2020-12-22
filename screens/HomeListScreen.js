import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FloatingAction } from "react-native-floating-action";

import Card from "../components/Card";

const HomeListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card />
      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => navigation.navigate("AddHome")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeListScreen;
