// Milestone 3: Render All Albums

import React from 'react'

function Player(props) {
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const play = props.play;
  const pause = props.pause;
  return (
    <div id='player-container'>
          <div id='player-controls'>
            <div className='row center'>
              <i className='fa fa-step-backward'></i>
              {/* onClick
              1. turn to play button
              2. audio.stops
              */}
              {
                isPlaying
                ?
                <i className='fa fa-pause-circle' onClick={pause}></i>
                :
                <i className='fa fa-play-circle' onClick={play}></i>
              }
              
              <i className='fa fa-step-forward'></i>
            </div>
          </div>
        </div>
  )
}

export default Player