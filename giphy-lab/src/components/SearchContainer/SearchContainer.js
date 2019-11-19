import React, { Component } from 'react';
import Search from '../Search/Search';
// import Result from '../Results/Results';
import axios from 'axios';

import './SearchContainer.css';

class SearchContainer extends Component {
    state = {
        value: '',
        giphy: [],
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=dc6zaTOxFJmzC&offset=5`)
        .then((res) => {
            // console.log(res.data.data)
            this.setState({
                giphy: res.data.data
            })
        })
        .catch((err) => console.log(err))
    }

    onInput = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    shows = (gifs) => {
        console.log(gifs)
        const list = []
        gifs.forEach((gif) => {
            list.push(
                <div className='col-sm-4'>
                    <img src={gif.images.fixed_height.url} alt="giphy"/>
                    <h4>{gif.title}</h4>
                </div>
            )
        })
        return list
    }

    render() { 
        return (
            <>
            
                <Search onInput={this.onInput} onSubmit={this.onSubmit} />
                <div className='container'>
                    <div className='row'>
                        {this.shows(this.state.giphy)}
                    </div>
                </div>
            

            </>
        )
        

   
    }
}

export default SearchContainer;
