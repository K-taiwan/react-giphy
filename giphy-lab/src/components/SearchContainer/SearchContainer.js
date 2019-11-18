import React, { Component } from 'react';
import Search from '../Search/Search';
import Result from '../Results/Results';
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

    render() {
        let shows 

        if(this.state.giphy){
            shows = this.state.giphy.map((show) =>{
            return (
                <div key={show.id}>
                    <Result result={show} key={show.id} />
                </div>
            )
         })
        }

        return (
            <div>
                <Search onInput={this.onInput} onSubmit={this.onSubmit} />
                {shows}
            </div>

        )
    }
}

export default SearchContainer;
