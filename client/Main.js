// Milestone 3: Render All Albums

import React from 'react'
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import Player from './components/Player';
import axios from 'axios';

// Notes:
// 1. Not using redux because this app will NOT have medium-large size codebase
// 2. A good rule of thumb is to start your state "higher up the component tree", and 
// then move it down as appropriate. We will start state in Main:

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfAlbums: [],
    }
  }

  async componentDidMount() {
    // AJAX request for some data:
    const { data } = await axios.get('/api/albums');
    // Once the request completes, we can use this.setState to place the albums on our state and trigger a re-render:
    this.setState({
      listOfAlbums: data,
    });
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums listOfAlbums={this.state.listOfAlbums} />
        <Player />
      </div>
    )
  }
}
