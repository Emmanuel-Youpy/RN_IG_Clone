import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ top: 40 }}>
        <Header />
        <Stories />
        <Post />
      </View>
    </View>
  );
};

export default HomeScreen;
