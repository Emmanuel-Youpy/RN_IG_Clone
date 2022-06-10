import React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <Text style={{ color: "white" }}>post</Text>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View>
    <View>
      <Image />
      <Text>Okay</Text>
    </View>
  </View>
);
export default Post;
