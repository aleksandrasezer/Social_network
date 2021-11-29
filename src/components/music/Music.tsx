import React from "react";
import s from './Music.module.css'
import spotify from '../../assets/images/spotify_icon.png'

export const Music = () => {
    return (
        <div className={s.musicContainer}>
            <div className={s.spotifyText}>
                Check out my Spotify Playlist!
                <span className={s.arrowDown}></span>
            </div>
            <div className={s.spotifyIcon}>
                <a href='https://open.spotify.com/playlist/6Wx8e7k4P9gP8n1qFopWbV?si=NWuwTF9wSP-CSIa_UGEYoA&utm_source=native-share-menu&dl_branch=1'
                   target="_blank"
                   rel="noreferrer">
                    <img src={spotify} alt='spotify icon'/>
                </a>
            </div>
        </div>
    )
}


