import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comments post={post} />
    </View>
  );
};

// Post Footer
const PostFooter = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="comment-o"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons8-save-64.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Comments
const Comments = ({ post }) => {
  return (
    <View>
      {post.comments.map((comment, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", marginTop: 5, marginLeft: 17 }}
        >
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}>{comment.user} </Text>
            {comment.comment}
          </Text>
        </View>
      ))}
    </View>
  );
};

// Comments
const CommentSection = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 17 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </View>
  );
};

// caption
const Caption = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 17 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

// Likes componenets
const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 17 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString()} likes
    </Text>
  </View>
);

// Post Image

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

// Post Header
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
