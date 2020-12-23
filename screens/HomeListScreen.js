import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FloatingAction } from "react-native-floating-action";

import { useDispatch } from "react-redux";
import * as houseAction from "../redux/actions/houseAction";

import Card from "../components/Card";

const HomeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  //dispatching the fetch action when the component renders
  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Card navigation={navigation} />
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
