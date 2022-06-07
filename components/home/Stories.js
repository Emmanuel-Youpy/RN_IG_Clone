import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { USERS } from "../../data/Users";

const Stories = () => {
  return (
    <View
      style={{
        marginBottom: 13,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source />
      </ScrollView>
      <Text style={{ color: "white" }}> Okay</Text>
    </View>
  );
};

export default Stories;
