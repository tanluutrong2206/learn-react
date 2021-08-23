import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "In the Mouth of Madness",
      duration: "05:28",
    },
    {
      title: "Classmates",
      duration: "01:41",
    },
    {
      title: "Run of the Country, The",
      duration: "04:28",
    },
    {
      title: "After Alice (Eye of the Killer)",
      duration: "03:26",
    },
    {
      title: "2046",
      duration: "02:25",
    },
    {
      title: "Noroi: The Curse ",
      duration: "04:57",
    },
    {
      title: "Sexy Baby",
      duration: "04:51",
    },
    {
      title: "Air Hawks",
      duration: "03:12",
    },
    {
      title: "So Proudly We Hail!",
      duration: "03:47",
    },
    {
      title: "Robe, The",
      duration: "00:31",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
