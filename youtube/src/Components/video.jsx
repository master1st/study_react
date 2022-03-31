import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import styles from './card.module.css'
import Videodetail from './videodetail';
class Video extends Component {

    setClickListen = (item) => {
       this.props.showVideo(item,this.props.item.id);
    }   
    render() { 
        return (
            <>
                <li className={styles.card_video} onClick={this.setClickListen}>
                    <img className={styles.card_thumbnail}
                        src={this.props.item.snippet.thumbnails.medium.url}>
                    </img>
                    <div className={styles.card_textfield}>
                        <p className={styles.card_title}>{this.props.item.snippet.title}</p>
                        <p className={styles.card_channel}>{this.props.item.snippet.channelTitle}</p>
                    </div>
                </li>
                
            </>
        );
    }
}
//버튼을 클릭했어 나는 그럼 props로 id를 전달받아서 그 아이디를 
export default Video;