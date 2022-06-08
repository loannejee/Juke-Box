// Milestone 4: Render Single Album View

import React from 'react';
import Song from './Song'

function SingleAlbumView(props) {
  const selectedAlbum = props.selectedAlbum;
  // For mapping
  const songs = selectedAlbum.songs;
  const start = props.start

  return (
    <div className='container'>

      <div id='single-album' className='column'>
        <div className='album'>
          <a>
            <img src={`${selectedAlbum.artworkUrl}`} />
            <p>{`${selectedAlbum.name}`}</p>
            <small>{`${selectedAlbum.artist.name}`}</small>
          </a>
        </div>
        <table id='songs'>
          <tbody>
            <tr className='gray'>
              <td />
              <td>#</td>
              <td>Name</td>
              <td>Artist</td>
              <td>Genre</td>
            </tr>
            {
              songs.map((song) => {
                return (
                  <Song
                    song={song}
                    selectedAlbum={selectedAlbum}
                    key={song.id}
                    start={start}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default SingleAlbumView