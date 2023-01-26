import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchEmojis = ({ onChange, inputText, onClick}) => {
  return (
    <div className='searchEmojis'>
        <input type="text" onChange={onChange} value={inputText}  />
        <div className="searchIcon" onClick={onClick}>
            <FaSearch className='icon' />
        </div>
    </div>
  )
}

export default SearchEmojis