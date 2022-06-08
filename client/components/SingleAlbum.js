// Milestone 3: Render All Albums

import React from 'react'

function SingleAlbum(props) {
    
    return (
        <div id='albums' className='row wrap'>
            <div className='album'>
                <a>
                    <img src={`${props.album.artworkUrl}`} />
                    <p>{`${props.album.name}`}</p>
                    <small>{`${props.album.artist.name}`}</small>
                </a>
            </div>
        </div>
    )
}

export default SingleAlbum