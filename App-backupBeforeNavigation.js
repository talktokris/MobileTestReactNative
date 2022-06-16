import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

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
import ListingEditScreen from "./app/screens/ListingEditScreen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import RegisterScreen from "./app/screens/RegisterScreen";

// import { Ionicons } from "@expo/vector-icons"; // Icon Import

export default function App() {
  return (
    <Screen>
      <RegisterScreen />
    </Screen>
  );

  //  <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
  // <ImageInput imageUri={imageUri}  onChangeImage={(uri) => setImageUri(uri)}/>

  //<ListingEditScreen />;
  //<ListingEditScreen />;
  //<LoginScreen />;
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
