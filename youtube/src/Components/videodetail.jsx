import React, { Component } from 'react';

class Videodetail extends Component {
    
    render() {
        const url = "http://www.youtube.com/embed/"
        const src = url.concat(this.props.videoId)
        return (
            <div>
                <iframe id="player" type="text/html" width="640" height="360"
                    src={src}
                    frameborder="0"></iframe>
            </div>
        );
    }
}

export default Videodetail;