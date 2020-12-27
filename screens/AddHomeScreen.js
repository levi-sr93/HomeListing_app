import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import * as houseAction from "../redux/actions/houseAction";

//creating the validation schema for the form
const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(),
  yearBuilt: yup.number().required(),
  image: yup.string().required(),
  address: yup.string().required().min(10).max(50),
  description: yup.string().required().min(10).max(50),
  homeType: yup.string().required(),
});

const AddHomeScreen = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
    // behavior="padding"
    // keyboardVerticalOffset={100}
    // style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            title: "",
            image: "",
            homeType: "",
            price: "",
            yearBuilt: "",
            address: "",
            description: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            setIsLoading(true);
            console.log(values);
            dispatch(houseAction.createHome(values))
              .then(() => {
                setIsLoading(false);
                Alert.alert("Created Successfully");
              })
              .catch(() => {
                setIsLoading(false);
                Alert.alert("An error occurred. Try Again");
              });
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("title")}
                  value={props.values.title}
                  onBlur={props.handleBlur("title")}
                />
                {/* in case the validation fails here we have an error handling object provided by Formik*/}
                <Text style={styles.error}>
                  {props.touched.title && props.errors.title}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("image")}
                  value={props.values.image}
                  onBlur={props.handleBlur("image")}
                />
                <Text style={styles.error}>
                  {props.touched.image && props.errors.image}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Home Type</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("homeType")}
                  value={props.values.homeType}
                  onBlur={props.handleBlur("homeType")}
                />
                <Text style={styles.error}>
                  {props.touched.homeType && props.errors.homeType}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("price")}
                  value={props.values.price}
                  keyboardType="numeric"
                  onBlur={props.handleBlur("price")}
                />
                <Text style={styles.error}>
                  {props.touched.price && props.errors.price}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Year built</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange("yearBuilt")}
                  value={props.values.yearBuilt}
                  keyboardType="numeric"
                  onBlur={props.handleBlur("yearBuilt")}
                />
                <Text style={styles.error}>
                  {props.touched.yearBuilt && props.errors.yearBuilt}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange("address")}
                  value={props.values.address}
                  onBlur={props.handleBlur("address")}
                />
                <Text style={styles.error}>
                  {props.touched.address && props.errors.address}
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange("description")}
                  value={props.values.description}
                  onBlur={props.handleBlur("description")}
                />
                <Text style={styles.error}>
                  {props.touched.description && props.errors.description}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button title="Add Home" onPress={props.handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  formGroup: {
    width: "100%",
  },
  label: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },

  error: {
    color: "red",
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddHomeScreen;
