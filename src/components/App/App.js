import React from "react";

const App = () => {
  return (
    <div className="app">
      <div className="nav">
        <h1>Jamming</h1>
      </div>
      <div className="search">
        <input
          placeholder="Enter a song"
          type="text"
          id="song-search"
          name="song-search"
        />
        <input type="submit" value="Search" />
      </div>
      <div className="songs">
        <div className="result-songs"></div>
        <div className="playlist-songs"></div>
      </div>
    </div>
  );
};

export default App;
