import React, { Component } from 'react';

class Result extends Component {
    render() {
        return(
            <div>
                <img src={this.props.result.images.fixed_height.url} alt={this.props.result.title}></img>
            </div>
        )
    }

}

export default Result; 