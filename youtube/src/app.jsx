import './app.css';
import React, { Component } from 'react';
import VideoList from './Components/videolist';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCLyt5QUm5cWIxi2lQZTZ5YjfrmJviMPqI&part=snippet&chart=mostPopular&maxResults=25")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를
        // 놓치지 않고 처리하기 위해서는
        // catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
      return (
        <div>
        <VideoList items = {items} />
        </div>
      );
  }
}

export default App;
