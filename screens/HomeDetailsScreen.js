import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
const HomeDetailsScreen = (props) => {
  //this id was passed in the second parameter in the navigate function in the Card component
  const { houseId } = props.route.params;
  console.log("house id", houseId);

  //accessing the global state and iterating over the houses array and returning the element that have the same id

  const house = useSelector((state) =>
    state.house.houses.find((house) => house._id === houseId)
  );

  console.log("House from state", house);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{house.title}</Text>
        </View>
        <View>
          <Image source={{ uri: house.image }} style={styles.image} />
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Home type: </Text>
          <Text style={styles.value}>{house.homeType}</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>{house.price}</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Yearn Built: </Text>
          <Text style={styles.value}>{house.yearBuilt}</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>{house.address}</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{house.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsGroup: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeDetailsScreen;
