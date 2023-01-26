import React from 'react'
import DisplayEmoji from './DisplayEmoji'

const DisplayEmojis = ({ emojiItems }) => {
    if(emojiItems){
        return (
            <div className='displayEmojis'>
                {emojiItems.map((item, idx) => <DisplayEmoji key={idx} item={item} />)}
            </div>
          )
    }else{
        return (
            <div className='termNotFound'>
                <p>We could not find a emoji with that name!</p>
            </div>
        )
    }
}

export default DisplayEmojis