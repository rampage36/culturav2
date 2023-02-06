import React from "react";
import css from "./Music.module.css"

const Music = () => {
    return ( <div className={css.music}>
            <div className={css.grid}>
                <div className={css.songItem1}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud1" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className={css.songItem2}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud2" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem3}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud3" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem4}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud4" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem5}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud5" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem6}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud6" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem7}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud7" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

                <div className={css.songItem8}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud8" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%23ffa364&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className={css.songItem9}>
                    <iframe width="350" height="350" allow="autoplay" title="soundcloud9" frameborder="0"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&color=%0000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>
                </div>

            </div>
        </div>
    )
}

export default Music;