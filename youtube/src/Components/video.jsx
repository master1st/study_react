import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import styles from './card.module.css'
import Videodetail from './videodetail';
class Video extends Component {
// constructor(props){
//     super(props);
//     this.state = 
//     {id : '0'}
// } 
//     showVideo = () => {
//      this.setState({id : this.props.item.id})
//     };
    render() {
        // let showVideoVar;
        // if (this.state.id){
        //     showVideoVar = <Videodetail key={this.state.id} videoId={this.state.id}/>
        // }
        return (
            <>
               
                <li className={styles.card_video} onClick={this.props.showVideo(this.props.item.id)}>
                    <img className={styles.card_thumbnail}
                        src={this.props.item.snippet.thumbnails.medium.url}>
                    </img>
                    <div className={styles.card_textfield}>
                        <p className={styles.card_title}>{this.props.item.snippet.title}</p>
                        <p className={styles.card_channel}>{this.props.item.snippet.channelTitle}</p>
                    </div>
                </li>
                {showVideoVar}
            </>
        );
    }
}
//버튼을 클릭했어 나는 그럼 props로 id를 전달받아서 그 아이디를 
export default Video;