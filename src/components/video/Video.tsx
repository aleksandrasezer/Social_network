import React from "react";
import s from './Video.module.css'

export const Video = () => {
    return (
        <>
            <h2 style={{color: 'rgba(255,255,255,0.9', textAlign: 'center', fontWeight: 'normal'}}>
                Shrek and Donkey
            </h2>
            <YoutubeEmbed embedId="-FtCTW2rVFM" />
        </>
    )
}



type YoutubeEmbedPropsTypes = {
    embedId: string
}

const YoutubeEmbed = (props: YoutubeEmbedPropsTypes) => (
    <div className={s.videoResponsive}>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);