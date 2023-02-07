import React from "react";
import css from "./Video.module.css"

const Video = () => {
    return ( 
            <div className={css.grid}>
                <div className={css.firstSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={css.secondSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={css.thirdSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={css.fourthSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={css.sixSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className={css.sevenSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className={css.xSong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className={css.ySong}>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/c9lykauGT1U"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
    )
}

export default Video;