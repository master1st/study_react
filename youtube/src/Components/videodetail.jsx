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
                <h1 className={styles.text}>{this.props.video[0].snippet.title}</h1>
                <h3 className={styles.text}>{this.props.video[0].snippet.channelTitle}</h3>
                <span className={styles.text}>{this.props.video[0].snippet.publishedAt}</span>
                <p className={styles.text}>{this.props.video[0].snippet.description}</p>
            </div>
        );
    }
}

export default Videodetail;