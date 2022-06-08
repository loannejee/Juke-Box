// Milestone 3: Render All Albums
// Milestone 4: Render Single Album View

import React from 'react';

function Sidebar(props) {
    const deselectAlbum = props.deselectAlbum

    return (
        <div id='sidebar'>
            <img src='juke.svg' id='logo' />
            <section>
                <h4>
                    <a onClick={() => deselectAlbum()}>ALBUMS</a>
                </h4>
            </section>
        </div>
    )
}

export default Sidebar