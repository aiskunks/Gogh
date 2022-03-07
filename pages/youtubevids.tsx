import React from "react";
import YouTube, {PlayerVars} from "react-youtube";
import utilStyles from "../styles/utils.module.css";

export default class YoutubeVideo
    extends React.Component {
    render() {
        const options = {
            height: "390",
            width: "640",
            PlayerVars : {
                autoplay : 1
            }
        };

        return (
            <div className={`${utilStyles.center} ${utilStyles.marginForPlayer}`} >
                <h2>What is Klee?</h2>
                <YouTube videoId="7ZvqzPLaGMw"
                         opts={options} onReady={this._onReady} />
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}
