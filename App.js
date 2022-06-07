import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import WelcomeScreen from "./app/screens/WelcomeScreen"; // Welcome scrren

import AppText from "./app/components/AppText"; // Standered StyleSheet
import AppButton from "./app/components/AppButton"; // Standered StyleSheet

// import { Ionicons } from "@expo/vector-icons"; // Icon Import

export default function App() {
  return (
    <View style={styles.container}>
      <AppButton title="Login" onPress={() => console.log("tapped")} />
    </View>
  );

  //  <AppText>Hi Lord Shiva</AppText>
  // <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#fff',
  },
});


