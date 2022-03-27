import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <li>{this.props.item.snippet.title}</li>
        );
    }
}

export default Video;