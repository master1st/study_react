import React, { Component } from 'react';
import Video from './video';
import Videodetail from './videodetail';
import styles from './videolist_card.module.css'
class VideoList extends Component {
  
  //   this.state = 
  //   {id : '0' , item : false}
  // }
  
  
  showVideo = (item, id) => 
  {
    this.props.showVideo(item,id);
    // item && this.setState({id : id , item:true});
   };

  render() {


    // let showVideoVar;
    //     if (this.state.item && this.state.id){
    //         showVideoVar = <Videodetail videoId={this.state.id} />
    //     }

    return (
      <ul className={styles.video_list}>
        
        {this.props.items.map(item => 
          <Video key={item.id} item={item}
          showVideo={this.showVideo}
           />
        )}
       
      </ul>
    );
  }
}

export default VideoList;