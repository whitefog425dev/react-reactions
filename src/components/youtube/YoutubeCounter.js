import React from 'react'
import reactCSS from 'reactcss'

import YoutubeCounterButton from './YoutubeCounterButton'

export const YoutubeCounter = ({ like, dislike, onLikeClick, onDislikeClick }) => {
  const styles = reactCSS({
    'default': {
      counter: {
        display: 'flex',
      },
      space: {
        width: '12px',
      },
    },
  })

  const handleLikeClick = () => onLikeClick()
  const handleDislikeClick = () => onDislikeClick()


  return (
    <div style={ styles.counter }>
      <YoutubeCounterButton
        number={ like }
        position="-66px -69px"
        tooltip="I like this"
        onClick={ handleLikeClick }
      />
      <div style={ styles.space } />
      <YoutubeCounterButton
        number={ dislike }
        position="-390px -148px"
        tooltip="I dislike this"
        onClick={ handleDislikeClick }
      />
    </div>
  )
}

export default YoutubeCounter
