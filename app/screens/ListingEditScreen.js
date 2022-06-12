import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  titile: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categoriesList = [
  { lebel: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { lebel: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { lebel: "Electronics", value: 3, backgroundColor: "purple", icon: "lock" },
  { lebel: "Camera", value: 4, backgroundColor: "orange", icon: "apps" },
];

function LoginScreen(props) {
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
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
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
            width="80%"
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
