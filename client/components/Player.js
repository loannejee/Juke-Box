// Milestone 3: Render All Albums

import React from 'react'

function Player(props) {
  const isPlaying = props.isPlaying;
  const play = props.play;
  const pause = props.pause;
  const next = props.next;
  const previous = props.previous;

  return (
    <div id='player-container'>
          <div id='player-controls'>
            <div className='row center'>
              <i className='fa fa-step-backward' onClick={previous}></i>
              {
                isPlaying
                ?
                <i className='fa fa-pause-circle' onClick={pause}></i>
                :
                <i className='fa fa-play-circle' onClick={play}></i>
              }
              
              <i className='fa fa-step-forward' onClick={next}></i>
            </div>
          </div>
        </div>
  )
}

export default Player