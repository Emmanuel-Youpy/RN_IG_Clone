import { USERS } from "./Users";

export const POSTS = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    user: USERS[0].user,
    likes: 30499,
    caption:
      "Never walk alone  photos, vector illustrations, and music for your videos. All the assets made by designers",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Taqiz",
        comment: "not today",
      },
      {
        user: "Zeda",
        comment:
          "I can do this as well  photos, vector illustrations, and music for your videos. All the assets made by designers",
      },
    ],
  },
  {
    imageUrl:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
    user: USERS[1].user,
    likes: 776,
    caption: "Great simbaca",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Taqiz",
        comment: "unbeleivable moment",
      },
      {
        user: "Zeda",
        comment: "They fought really well",
      },
    ],
  },
  {
    imageUrl:
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
    user: USERS[2].user,
    likes: 776,
    caption: "Great simbaca",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "Taqiz",
        comment: "unbeleivable moment",
      },
      {
        user: "Zeda",
        comment: "They fought really well",
      },
    ],
  },
];
