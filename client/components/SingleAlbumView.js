// Milestone 4: Render Single Album View

import React from 'react';
import SingleAlbum from './SingleAlbum';

function SingleAlbumView(props) {

    return (
        <div className='container'>

          <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src='default-album.jpg' />
                <p>ALBUM 2</p>
                <small>Artist Name</small>
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
                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>1</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>2</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>3</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
    )
}

export default SingleAlbumView