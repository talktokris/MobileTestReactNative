import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function ({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
