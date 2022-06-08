// Milestone 3: Render All Albums

import React from 'react'

function SingleAlbum(props) {
    const selectAlbum = props.selectAlbum

    return (
        <div className='album'>
            <a onClick={() => selectAlbum(props.album.id)}>
                <img src={`${props.album.artworkUrl}`} />
                <p>{`${props.album.name}`}</p>
                <small>{`${props.album.artist.name}`}</small>
            </a>
        </div>
    )
}

export default SingleAlbum