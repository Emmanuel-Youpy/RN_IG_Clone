import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: 'source={require("../../assets/icons8-home-50.png")}',
    // active: '<Entypo name="home" size={24} color="white" />',
    // inactive: 'source={require("../../assets/icons8-home filled-50.png")}',
  },
];

const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{ uri: icon.active }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
      <Text style={{ color: "red" }}>Okay</Text>
    </View>
  );
};

export default BottomTab;
