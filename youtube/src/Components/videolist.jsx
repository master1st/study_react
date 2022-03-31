import React, { Component } from 'react';
import Video from './video';
import Videodetail from './videodetail';
import styles from './videolist_card.module.css'
class VideoList extends Component {
  constructor(props){
    super(props);
    this.state = 
    {id : '0'}
  }

  showVideo = (id) => {
    console.log(id)
    this.setState({id})
   };

  render() {
    let showVideoVar;
        if (this.state.id){
            showVideoVar = <Videodetail key={this.state.id} videoId={this.state.id}/>
        }

    return (
      <ul className={styles.video_list}>
        {this.props.items.map(item => 
          <Video key={item.id} item={item}
          showVideo={this.showVideo}
          />
        )}
        {showVideoVar}
      </ul>
    );
  }
}

export default VideoList;