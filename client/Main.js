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
// then move it down as appropriate. We will start state in Main.js
// 3. JukeAudio.js shall be the highest component and render Main.js


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAlbums: [],
      selectedAlbum: {},
      currentSong: {},
      currentSongList: [],
      isPlaying: false,
    };
    // establish context to "this" for using this function later...
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    // for the music player
    this.start = this.start.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
        this.setState({
          ...this.state,
          selectedAlbum: album,
          currentSongList: album.songs
        })
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

  start(song) {
    audio.src = song.audioUrl;
    audio.load();
    audio.play()
      .then(() => this.setState({
        currentSong: song,
        isPlaying: true,
      }))
    console.log(this.state)
  }

  play() {
    audio.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    audio.pause();
    this.setState({ isPlaying: false });
    console.log(this.state)
  }

  next() {
    const firstSong = this.state.currentSongList[0];
    const currentSongList = this.state.currentSongList;
    let nextSongId

    // Loop through currentSongList to find id of the currentSong playing
    // and the id of the nextSong in line
    for (let i = 0; i < currentSongList.length; i++) {
      if ((this.state.currentSong.id === currentSongList[i].id) && currentSongList[i + 1]) {
        nextSongId = currentSongList[i + 1].id;
      }
    }

    // If the nextSong doesn't exist, then make the nextSong the first song in the album
    if (!nextSongId) {
      nextSongId = firstSong.id
    }

    // Find an object in an array by one of its properties
    function isNextSong(song) {
      return song.id === nextSongId
    }

    // Determine what is the nextSong:
    const nextSong = currentSongList.find(isNextSong);

    this.start(nextSong)
  };


  previous() {
    const lastSong = this.state.currentSongList[this.state.currentSongList.length - 1];
    const currentSongList = this.state.currentSongList;
    let prevSongId

    for (let i = 0; i < currentSongList.length; i++) {
      if ((this.state.currentSong.id === currentSongList[i].id) && currentSongList[i - 1]) {
        prevSongId = currentSongList[i - 1].id
      }
    }

    if (!prevSongId) {
      prevSongId = lastSong.id
    }

    function isPrevSong(song) {
      return song.id === prevSongId
    }

    const previousSong = currentSongList.find(isPrevSong);

    this.start(previousSong)
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
              currentSong={this.state.currentSong}
            />
            :
            <AllAlbums
              listOfAlbums={this.state.listOfAlbums}
              selectAlbum={this.selectAlbum}
            />
        }
        {
          this.state.currentSong.id
            ?
            <Player
              currentSong={this.state.currentSong}
              isPlaying={this.state.isPlaying}
              start={this.start}
              play={this.play}
              pause={this.pause}
              next={this.next}
              previous={this.previous}
            />
            :
            <></>
        }

      </div>
    )
  }
}
