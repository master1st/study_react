import React, { Component } from 'react';
import styles from './card.module.css'
class Videodetail extends Component {

    render() {
        const url = "http://www.youtube.com/embed/"
        const src = url.concat(this.props.videoId)
        console.log(this.props.video[0].snippet);
        return (
            <div className={styles.videomove}>
                <iframe id="player" type="text/html" width="1000" height="570"
                    src={src}
                    frameborder="0"></iframe>
                <h2>{this.props.video[0].snippet.title} </h2>
                <p>{this.props.video[0].snippet.publishedAt}</p>
                <p>{this.props.video[0].snippet.channelTitle}</p>
                <br />
                {this.props.video[0].snippet.description}
            </div>
        );
    }
}

export default Videodetail;