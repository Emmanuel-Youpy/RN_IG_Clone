import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTab, { bottomTabsIcons } from "../components/BottomTab";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <>
            <Post post={post} key={index} />
          </>
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabsIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default HomeScreen;
