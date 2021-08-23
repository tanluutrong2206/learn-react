import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  const { title, duration } = song;
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {title}</p>
      <p>Duraton: {duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
