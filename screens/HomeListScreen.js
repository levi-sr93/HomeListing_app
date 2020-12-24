import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { FloatingAction } from "react-native-floating-action";

import { useDispatch, useSelector } from "react-redux";
import * as houseAction from "../redux/actions/houseAction";

import Card from "../components/Card";

const HomeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  //access data from state and taking the houses from house array
  const { houses } = useSelector((state) => state.house);

  //dispatching the fetch action when the component renders
  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            title={item.title}
            address={item.address}
            homeType={item.homeType}
            description={item.description}
            price={item.price}
            image={item.image}
            yearBuilt={item.yearBuilt}
            id={item._id}
          />
        )}
      />
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
