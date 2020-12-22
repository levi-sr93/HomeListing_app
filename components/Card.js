import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Modern 4-bedroom Mansion</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/mansao.jpeg")}
        >
          <Text style={styles.price}>$20.000,00</Text>
          <View style={styles.year}>
            <Text style={styles.yearText}>2020</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>This is the description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    margin: 10,
    height: 300,
    elevation: 5,
    borderRadius: 10,
    shadowRadius: 8,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
  },
  titleContainer: {
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    color: "#fff",
    margin: 10,
  },

  year: {
    margin: 10,
    backgroundColor: "#2652b0",
    height: 25,
    width: 80,
    borderRadius: 5,
  },
  yearText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "gray",
  },
});

export default Card;
