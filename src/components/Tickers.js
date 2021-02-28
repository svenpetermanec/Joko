import Ticker from "./Ticker"

const Tickers = ({tickers, onDelete}) => {
    return (
        <>
           {tickers.map((ticker) => (
               <Ticker key = {ticker.instrument} ticker = {ticker} onDelete={onDelete}/>
               ))} 
        </>
    )
}

export default Tickers
