// Milestone 3: Render All Albums

import React from 'react'
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import Player from './components/Player';
import SingleAlbumView from './components/SingleAlbumView';
import axios from 'axios';

// Notes:
// 1. Not using redux because this app will NOT have medium-large size codebase
// 2. A good rule of thumb is to start your state "higher up the component tree", and 
// then move it down as appropriate. We will start state in Main:

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAlbums: [],
      selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
  }

  async componentDidMount() {
    // AJAX request for some data:
    const { data } = await axios.get('/api/albums');
    // Once the request completes, we can use this.setState to place the albums on our state and trigger a re-render:
    this.setState({
      ...this.state,
      listOfAlbums: data,
    });
  }

  selectAlbum (albumId) {
    // Need to use .then to synchronously set the new state after making request:
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  // deselectAlbum() {
  //   this.setState({
  //     ...this.state,
  //     selectedAlbum: {}
  //   })
  // }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        {
          this.state.selectedAlbum.id
          ? 
          <SingleAlbumView album={this.state.selectedAlbum}/> 
          :
          <AllAlbums listOfAlbums={this.state.listOfAlbums} selectAlbum={this.selectAlbum} />
        }
        <Player />
      </div>
    )
  }
}
