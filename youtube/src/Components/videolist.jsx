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
// 아니 사실상 아이템을 가져와서 그놈들을 보여주면 되는건데 왜이렇게 어렵지?
// 클릭한 아이템의 json 정보만을 화면에 출력하고싶다. 애초에 onClick 을 사용하는게 아닌가?
// 
  showVideo = (item, id) => {
    item && this.setState({id : id})
   };
//얼추 맞았어 개념은, 내가 비디오를 선택하면 그놈을 처음엔 null값을 주고 state에서 관리하다가
//그놈이 선택되면
  render() {
    let showVideoVar;
        if (this.state.id){
            showVideoVar = <Videodetail videoId={this.state.id} />
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