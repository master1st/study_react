import styles from './app.module.css';
import React, { Component } from 'react';
import VideoList from './Components/videolist';
import InputFiled from './Components/inputFiled';
import Videodetail from './Components/videodetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      id : '0' , item : false
    };
  }

  showVideo = (item,id) => {
    item && this.setState({id : id , item:true});
  }
  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCLyt5QUm5cWIxi2lQZTZ5YjfrmJviMPqI&part=snippet&chart=mostPopular&maxResults=25")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  //아래부분 json의 데이터를 map을 이용해 변형시켜 처리한 부분은 배울점.
  //then 안에서의 자유로운 코드작성 및 변형
  inputFiled = (text) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLyt5QUm5cWIxi2lQZTZ5YjfrmJviMPqI&part=snippet&maxResults=25&type=video&q=${text}`)
      .then(res => res.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items =>
        this.setState({
          items: items,
        }))
  }
  render() {

    let showVideoVar;
    if (this.state.item && this.state.id){
        showVideoVar = <Videodetail videoId={this.state.id} />
    }
    
    const { error, isLoaded, items } = this.state;
    return (
      <div className={styles.app}>
        <InputFiled query={this.inputFiled} />
        <section className={styles.content}>
          {this.state.item && <div className={styles.detail}>
            {showVideoVar}
          </div>}
          <div className={styles.list}>
          <VideoList items={items} showVideo={this.showVideo}
          display={this.state.item ? 'list' : 'grid' }/>
          </div>
        </section>
      </div>
    );
  }
}


export default App;
