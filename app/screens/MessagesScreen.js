import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Separater from "../components/Separater";
const messages = [
  {
    id: 1,
    title: "T1",
    subTitle: "D1",
    image: require("../assets/images/av.jpg"),
  },
  {
    id: 2,
    title: "T2",
    subTitle: "D2",
    image: require("../assets/images/av.jpg"),
  },
  {
    id: 3,
    title: "T3",
    subTitle: "D5",
    image: require("../assets/images/av.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("Message Selected:- " + item.id)}
            renderRightActions={() => (
              <View style={{ backgroundColor: "red", height: 70 }}></View>
            )}
          />
        )}
        ItemSeparatorComponent={Separater}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
