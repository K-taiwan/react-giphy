import React, { Component } from 'react';
// import HelloWord from './components/HelloWorld';
// import Search from './components/Search/Search';
import SearchContainer from './components/SearchContainer/SearchContainer';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <>
        <div className='jumbotron text-center'>
          <h1>React Giphy</h1>
        </div>
          <SearchContainer />
      </>
    );
  }
}

export default Home;
