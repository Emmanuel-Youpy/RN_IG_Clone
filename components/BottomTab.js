import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabsIcons = [
  {
    name: "Home",
    active:
      "https://icon-library.com/images/house-icon-white/house-icon-white-22.jpg",
    inactive:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWnLxXPzMfQndkyVwLpuX8NNhXB2j51URcbPdzVUirKvq9DuvpPSQts8l8dnzEsmNX-M&usqp=CAU",
  },
  {
    name: "Search",
    active:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxICY7v8a7DbKB_BebFIRbnOoPCX4O92hBcMKjVIDm8fLSc-Id0ndJWYMo57-VdTTIYA0&usqp=CAU",
    inactive:
      "https://www.citypng.com/public/uploads/small/116400840186bmo0mkghcdq8hn99wmpbh9wrgbytghidisi7e41vegbclccrb6kg9hrk0ebgqrpc5ezz2tjtkvsfsvk7yfbakowxbpvrzsakde3.png",
  },
  {
    name: "Reels",
    active:
      "https://www.immagineassociati.it/wp-content/uploads/2020/08/11_INSTAGRAM-REELS.png",
    inactive:
      "https://www.immagineassociati.it/wp-content/uploads/2020/08/11_INSTAGRAM-REELS.png",
  },
  {
    name: "Likes",
    active:
      "https://images.assetsdelivery.com/compings_v2/photoart23d/photoart23d1901/photoart23d190100030.jpg",
    inactive:
      "https://images.assetsdelivery.com/compings_v2/photoart23d/photoart23d1901/photoart23d190100030.jpg",
  },
  {
    name: "Profile",
    active:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    inactive:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];

const BottomTab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        bottom: "3%",
        zIndex: 999,
        backgroundColor: "#000",
      }}
    >
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          height: 50,
          paddingTop: 10,
        }}
      >
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },

  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});
export default BottomTab;
