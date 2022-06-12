import React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={{ uri: post.profile_picture }}
        style={{
          width: 35,
          height: 35,
          borderRadius: 50,
          marginLeft: 6,
          borderWidth: 1.6,
          borderColor: "#ff8501",
        }}
      />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "bold" }}>...</Text>
  </View>
);
export default Post;
