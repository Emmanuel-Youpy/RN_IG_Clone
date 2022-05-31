import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ top: 40 }}>
        <Header />
      </View>
    </View>
  );
};

export default HomeScreen;
