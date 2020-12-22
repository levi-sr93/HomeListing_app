import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const HomeDetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Modern Mansion 4-bedroom</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/mansao.jpeg")}
            style={styles.image}
          />
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Home type: </Text>
          <Text style={styles.value}>Modern Mansion</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>$ 2.000.000,00</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Yearn Built: </Text>
          <Text style={styles.value}>2020</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>Hills living</Text>
        </View>

        <View style={styles.detailsGroup}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>This is the description</Text>
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
