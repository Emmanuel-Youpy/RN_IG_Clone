import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{
            width: 100,
            height: 50,
            resizeMode: "contain",
          }}
          source={require("../../assets/ig3.jpg")}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <FontAwesome5 name="heart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "red",
              position: "absolute",
              left: 10,
              bottom: 18,
              width: 25,
              height: 18,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>11</Text>
          </View>
          <FontAwesome5 name="facebook-messenger" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
