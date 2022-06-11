import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen"; // Welcome scrren

import AppText from "./app/components/AppText"; // Standered StyleSheet
import AppButton from "./app/components/AppButton"; // Standered StyleSheet
import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

// import { Ionicons } from "@expo/vector-icons"; // Icon Import

const categories = [
  { lebel: "Furniture", value: 1 },
  { lebel: "Clothing", value: 2 },
  { lebel: "Electronics", value: 3 },
  { lebel: "Camera", value: 4 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return <LoginScreen />;
  //      <AppPicker icon="apps" placeholder="Category" />
  //<AppTextInput icon="email" />;
  //<ListingScreen />;
  //<AccountScreen />;
  // <MessagesScreen />;
  //<ViewImageScreen />;
  /* 
  <View style={{  backgroundColor: colors.grayOne,  margin: 10, marginTop: 40, }} >
    <Card title="Red jacket for sale !"  subTitle="$100"  image={require("./app/assets/images/img1.jpg")} />
   </View>
  */
  //  <AppText>Hi Lord Shiva</AppText>
  //  <WelcomeScreen />;
  //<ListingDetailScreen />;

  //</Screen>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#fff',
  },
});
