import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => 
          <Video key={item.id} item={item}/>
        )}
      </ul>
    );
  }
}

export default VideoList;