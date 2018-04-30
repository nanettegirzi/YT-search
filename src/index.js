import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
const API_KEY = 'AIzaSyCLTAlrHP7_ezHsuYfbKfgWHPjSUo0CMWE';



// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
}

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this components generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))
