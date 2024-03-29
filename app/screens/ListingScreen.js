import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const getListingsAPi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsAPi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsAPi.error && (
        <>
          <View style={styles.retryView}>
            <AppText style={{ textAlign: "center" }}>
              Couldn't retrieve the listings.
            </AppText>
            <AppButton title="Retry" onPress={getListingsAPi.request} />
          </View>
        </>
      )}

      <ActivityIndicator visible={getListingsAPi.loading} />
      <FlatList
        data={getListingsAPi.data}
        keyExtractor={(Listing) => Listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
  retryView: {
    flex: 1,
    alignItem: "center",
    justifyContent: "center",
  },
});
export default ListingScreen;
