import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "Fist Item One",
    subTitle: "50",
    image: require("../assets/images/img1.jpg"),
  },
  {
    id: 2,
    title: "Fist Item Two",
    subTitle: "230",
    image: require("../assets/images/img2.jpg"),
  },
  {
    id: 3,
    title: "Fist Item Three",
    subTitle: "250",
    image: require("../assets/images/img3.jpg"),
  },
  {
    id: 4,
    title: "Fist Item Four",
    subTitle: "100",
    image: require("../assets/images/img4.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(Listing) => Listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, backgroundColor: colors.lightGray },
});
export default ListingScreen;
