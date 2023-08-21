import React from "react";

import style from './Track.module.css';

const Track = ({track}) => {
    return (
        <div className={style}>
            <h1>{track.name}</h1>
            <p>Artist : {track.artist}</p>
            <p>Album : {track.album}</p>
        </div>
    )
};

export default Track;