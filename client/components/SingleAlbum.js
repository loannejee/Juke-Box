// Milestone 3: Render All Albums

import React from 'react'

function SingleAlbum(props) {
    const selectAlbum = props.selectAlbum
    const album = props.album;

    return (
        <div className='album'>
            <a onClick={() => selectAlbum(album.id)}>
                <img src={`${album.artworkUrl}`} />
                <p>{`${album.name}`}</p>
                <small>{`${album.artist.name}`}</small>
            </a>
        </div>
    )
}

export default SingleAlbum