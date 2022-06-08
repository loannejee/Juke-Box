// Milestone 3: Render All Albums

import React from 'react'
import SingleAlbum from './SingleAlbum'

// functional component
function AllAlbums(props) {
    const listOfAlbums = props.listOfAlbums

    return (
        <div className='container'>

            {
                listOfAlbums.map((album) => {
                    return (
                        <SingleAlbum album={album} key={album.id}/>
                    )
                })
            }



        </div>
    )
}

export default AllAlbums