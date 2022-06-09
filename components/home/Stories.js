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
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={{ uri: story.image }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                marginLeft: 8,
                borderWidth: 3,
                borderColor: "#ff8501",
              }}
            />
            <Text style={{ color: "white" }}>
              {" "}
              {story.user.length > 9
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
