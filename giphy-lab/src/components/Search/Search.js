import React, { Component } from "react";
import './Search.css';
// import SearchContainer from "../SearchContainer/SearchContainer";

class Search extends Component {
    render(){
        return(
            <div className='container text-center form1'>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" name="search" placeholder="Input" onInput={this.props.onInput}></input>
                    <input type="submit" name="submit"></input>
                </form>
            </div>
        )
    }
}

export default Search;