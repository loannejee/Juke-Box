// Milestone 4: Render Single Album View

import React from 'react'

function Song(props) {
    const song = props.song
    const selectedAlbum = props.selectedAlbum;
    const start = props.start

    return (
        <tr>
            <td><i className='fa fa-play-circle' onClick={start}/></td>
            <td>{`${song.id}`}</td>
            <td>{`${song.name}`}</td>
            <td>{`${selectedAlbum.artist.name}`}</td>
            <td>{`${song.genre}`}</td>
        </tr>
    )
}

export default Song