import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTab, { bottomTabsIcons } from "../components/BottomTab";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ top: 40 }}>
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
      </View>
    </View>
  );
};

export default HomeScreen;
