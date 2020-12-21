import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AboutScreen from "../screens/AboutScreen";
import AddHomeScreen from "../screens/AddHomeScreen";
import HomeDetailsScreen from "../screens/HomeDetailsScreen";
import HomeListScreen from "../screens/HomeListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AboutStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

//creating each stack navigation
function stackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        options={{ title: "HomeHunt" }}
      />

      <Stack.Screen name="HomeDetail" component={HomeDetailsScreen} />
      <Stack.Screen name="AddHome" component={AddHomeScreen} />
    </Stack.Navigator>
  );
}

//creating the bottom tabs navigation
//this will be the root navigation so we wrap with navigation Container Component
// as this is the entry point navigation - Changed the name from tabsNavigation to AppNavigator
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        /*this props were passed by react navigation  */
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "About") {
              iconName = "info";
            }
            return <MaterialIcons name={iconName} size={24} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={stackNavigator} />
        <Tab.Screen name="About" component={AboutStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
