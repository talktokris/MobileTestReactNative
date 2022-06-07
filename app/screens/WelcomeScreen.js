import React from "react";

//import { ImageBackground, StyleSheet,View } from "react-native";
import {
  useState,
  Component,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

//import React, {useState, Component, ImageBackground} from 'react';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require("../assets/images/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoWelcome}
        />

        <Text style={styles.logoText}>Your Seach End Here</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.loginRegister}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: 200,
    top: 100,
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },

  loginRegister: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
  },
  logoWelcome: {
    justifyContent: "center",
    width: "100%",
    resizeMode: "center",
    flex: 1,
  },
  logoText: {
    fontSize: 18,
    width: "100%",
    height: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1, // Entire Screen
    flexDirection: "column", // Horizantal alignment  (column, column-reverse, row, row-reverse)
    justifyContent: "center", // Main alignment (flex-start, flex-end, center, stretch, space-between, space-around)
    alignItems: "center", //Vertical alignment  (flex-start, flex-end, center, stretch, baseline)
  },
});

export default WelcomeScreen;
