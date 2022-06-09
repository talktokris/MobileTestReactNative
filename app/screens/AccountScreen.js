import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import Separater from "../components/Separater";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Krishna Jha"
          subTitle="freshkris@gmail.com"
          image={require("../assets/images/av.jpg")}
        />
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                iconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
            ItemSeparatorComponent={Separater}
          />
        </View>
        <ListItem
          title="Logout"
          iconComponent={
            <Icon
              name="logout"
              size={45}
              backgroundColor="#ffe66d"
              iconColor="white"
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.lightGray },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
