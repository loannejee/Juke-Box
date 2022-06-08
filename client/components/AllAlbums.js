// Milestone 3: Render All Albums

import React from 'react'
import SingleAlbum from './SingleAlbum'

// functional component
function AllAlbums(props) {
    const listOfAlbums = props.listOfAlbums
    const selectAlbum = props.selectAlbum

    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                {
                    listOfAlbums.map((album) => {
                        return (
                            <SingleAlbum 
                            album={album} 
                            key={album.id} 
                            selectAlbum={selectAlbum}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllAlbums