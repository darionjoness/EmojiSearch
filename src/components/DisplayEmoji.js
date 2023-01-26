import React from 'react'

const DisplayEmoji = ({ item }) => {
  return (
    <div className='displayEmoji'>
        <div className="emojiName">
            <span>Name: </span>
            <p>{item.unicodeName}</p>
        </div>
        <div className="emojiImg">
            <span>Emoji: </span>
            <p>{item.character}</p>
        </div>
    </div>
  )
}

export default DisplayEmoji