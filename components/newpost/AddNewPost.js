import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddNewPost = () => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Header />
      {/* Post form */}
    </View>
  );
};

const Header = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <TouchableOpacity>
      <AntDesign name="left" size={24} color="white" />
    </TouchableOpacity>
    <Text
      style={{
        color: "white",
        fontWeight: "700",
        fontSize: 20,
        marginRight: 25,
      }}
    >
      {" "}
      New Post
    </Text>
    <Text></Text>
  </View>
);

export default AddNewPost;
