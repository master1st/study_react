import styles from './app.css';
import React, { Component } from 'react';
import VideoList from './Components/videolist';
import InputFiled from './Components/inputFiled';
import Videodetail from './Components/videodetail';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  inputFiled = (text) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLyt5QUm5cWIxi2lQZTZ5YjfrmJviMPqI&part=snippet&maxResult=25&q=${text}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
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
        <InputFiled query = {this.inputFiled}/>
        <VideoList items = {items} />
        </div>
      );
  }
}


export default App;
