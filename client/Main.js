// Milestone 3: Render All Albums
// Milestone 4: Render Single Album View

import React from 'react'
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import Player from './components/Player';
import SingleAlbumView from './components/SingleAlbumView';
import axios from 'axios';



// Milestone 5: Music Player
// FYI: HTML5 comes with an <audio> element
// Declare our audio as GLOBAL to the module, so we can use it:
const audio = document.createElement('audio');



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
    // establish context to "this" for using this function later...
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    // for the music player
    this.start = this.start.bind(this);
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

  selectAlbum(albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => // Using arrow functions is important here! Otherwise, our this context would be undefined!
        this.setState({ selectedAlbum: album })
      );
  }

  // NTS: Another way to trigger update state for selectedAlbum is by using if statement:
  // async selectAlbum(albumId) {
  //   const { data } = await axios.get(`/api/albums/${albumId}`);
  //   if (data) {
  //     this.setState({ ...this.state, selectedAlbum: data })
  //   }
  // }

  deselectAlbum() {
    this.setState({
      ...this.state,
      selectedAlbum: {}
    })
  }

  start() {
    audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.load();
    audio.play();
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar deselectAlbum={this.deselectAlbum} />
        {
          this.state.selectedAlbum.id
            ?
            <SingleAlbumView
              selectedAlbum={this.state.selectedAlbum}
              start={this.start}
            />
            :
            <AllAlbums
              listOfAlbums={this.state.listOfAlbums}
              selectAlbum={this.selectAlbum}
            />
        }
        <Player />
      </div>
    )
  }
}
