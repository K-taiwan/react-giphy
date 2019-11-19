import React, { Component } from 'react';

class Result extends Component {
    render() {
        return(
            
            <div classnName="col-sm-3">
                <img src={this.props.result.data.images.fixed_height.url} alt={""}/>
            </div>
            
        )
    }

}

export default Result; 