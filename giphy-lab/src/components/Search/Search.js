import React, { Component } from "react";
import './Search.css';

class Search extends Component {
    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" name="search" placeholder="Input" onInput={this.props.onInput}></input>
                    <input type="submit" name="submit"></input>
                </form>
            </div>
        )
    }
}

export default Search;