import { useState } from 'react'
import Navbar from "./components/Navbar"
import Tickers from "./components/Tickers"
import AddTicker from "./components/AddTicker"

function App() {
  const [showAddTicker, setShowAddTicker]  = useState(false)
  const [tickers, setTickers] = useState([

])
const addTicker = (ticker) => {
  const newTicker = {...ticker}
  setTickers([...tickers, newTicker])
}

const deleteTicker = (instrument) => {
  setTickers(tickers.filter((ticker) => ticker.instrument !== instrument))
}

  return (
    <div className="App">
      <Navbar onAdd={() => setShowAddTicker(!showAddTicker)} showAddTicker={showAddTicker}/>
      {showAddTicker && <AddTicker onAdd={addTicker}/>}
      <Tickers tickers = {tickers} onDelete={deleteTicker}/>
    </div>
  );
}

export default App;
