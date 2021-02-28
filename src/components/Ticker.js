import {FaTimes} from 'react-icons/fa'

const Ticker = ({ticker, onDelete}) => {
    return (
        <ul>
            <li><FaTimes className="close" onClick={() => onDelete(ticker.instrument)}/></li>
            <li>{ticker.instrument}</li>
            <li>{ticker.quantity}</li>
            <li>{ticker.buyPrice}</li>
        </ul>
    )
}

export default Ticker
