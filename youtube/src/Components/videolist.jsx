import React, { Component } from 'react';
import Video from './video';
import Videodetail from './videodetail';
import styles from './videolist_card.module.css'
class VideoList extends Component {
// state ={
//   id : '0'
// }

//   showVideo = (id) => {
//     this.state.id = id
//     };
    
    
  render() {
    // const url = "http://www.youtube.com/embed/"
    // const src = url.concat(this.state.id)
    // console.log(src)
    return (
      <ul className={styles.video_list}>
        {this.props.items.map(item => 
          <Video key={item.id} item={item}
          showVideo={this.showVideo}/>
        )}
      </ul>
    );
  }
}

export default VideoList;