import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categoriesList = [
  { lebel: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { lebel: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { lebel: "Electronics", value: 3, backgroundColor: "purple", icon: "lock" },
  { lebel: "Camera", value: 4, backgroundColor: "orange", icon: "apps" },
];

function LoginScreen(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
        />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) =>
            console.log(values + " Location :" + location.coords.latitude)
          }
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <AppFormField name="title" maxLength={255} placeholder="Title" />

          <AppFormField
            name="price"
            maxLength={8}
            keyboardType="numeric"
            placeholder="Price"
          />

          <AppFormPicker
            items={categoriesList}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            icon="apps"
            placeholder="Category"
            /* width="80%" */
          />

          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />

          <SubmitButton title="Post" />
        </AppForm>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 150,
    height: 110,
    alignSelf: "center",
    margin: 30,
    marginTop: 50,
  },
});

export default LoginScreen;
