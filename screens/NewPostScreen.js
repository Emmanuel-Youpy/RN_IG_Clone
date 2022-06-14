import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AddNewPost from "../components/newpost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
