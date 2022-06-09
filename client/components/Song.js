// Milestone 4: Render Single Album View

import React from 'react'

function Song(props) {
    const song = props.song;
    const selectedAlbum = props.selectedAlbum;
    const start = props.start;
    const currentSong = props.currentSong;
    let songPlaying = false;
    if (currentSong === song) {
        songPlaying = true
    }

    return (
        // interpolated expression that evaluates to string
        <tr className={song.id === currentSong.id ? 'active' : ''}>
            {
                songPlaying
                ?
                <td></td>
                :
                <td><i className='fa fa-play-circle' onClick={() => start(song)} /></td>
            }
            <td>{`${song.id}`}</td>
            <td>{`${song.name}`}</td>
            <td>{`${selectedAlbum.artist.name}`}</td>
            <td>{`${song.genre}`}</td>
        </tr>
    )
}

export default Song