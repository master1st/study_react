import React, { Component } from 'react';
import styles from './card.module.css'
class Videodetail extends Component {
    
    render() {
        const url = "http://www.youtube.com/embed/"
        const src = url.concat(this.props.videoId)
        return (
            <div className={styles.videomove}>
                <iframe id="player" type="text/html" width="1000" height="570"
                    src={src}
                    frameborder="0"></iframe>
                
            </div>
        );
    }
}

export default Videodetail;