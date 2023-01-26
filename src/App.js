import Header from "./components/Header";
import SearchEmojis from "./components/SearchEmojis";
import DisplayEmojis from "./components/DisplayEmojis";
import Guide from "./components/Guide";
import { useState, useEffect } from "react";


function App() {
  const [inputText, setInputText] = useState('')
  const [activeData, setActiveData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  

    const searchEmojis = async () => {
      setIsLoading(true)
      const res = await fetch(`https://emoji-api.com/emojis?search=${inputText}&access_key=d8c3675bbc6106ed0f2a6a6ec0c1b595360a9a8c`)


      const data = await res.json()

      setActiveData(data)
      setIsLoading(false)
      setInputText('')
    }
  

  return (
    <div className="app container">
      <Header />
      <div className="card">
        <Guide />
        <SearchEmojis inputText={inputText} onChange={(e) => setInputText(e.target.value)} onClick={searchEmojis} />
        {isLoading && <p className="loading">Loading...</p>}
        <DisplayEmojis emojiItems={activeData} />
      </div>
    </div>
  );
}

export default App;
