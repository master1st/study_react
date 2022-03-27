import React, { Component } from 'react';
import Video from './video';
import styles from './videolist_card.module.css'
class VideoList extends Component {
  render() {
    return (
      <ul className={styles.video_list}>
        {this.props.items.map(item => 
          <Video key={item.id} item={item}/>
        )}
      </ul>
    );
  }
}

export default VideoList;