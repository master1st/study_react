import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import styles from './card.module.css'
class Video extends Component {

    render() {
        return (
            <li className={styles.card_video}>
                <img className={styles.card_thumbnail}
                    src={this.props.item.snippet.thumbnails.medium.url}>
                </img>
                <div className={styles.card_textfield}>
                    <p className={styles.card_title}>{this.props.item.snippet.title}</p>
                    <p className={styles.card_channel}>{this.props.item.snippet.channelTitle}</p>
                </div>
            </li>
        );
    }
}

export default Video;