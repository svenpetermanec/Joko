import Button from "./Button"

const Navbar = ({onAdd, showAddTicker}) => {

    return (
        <ul className="nav">
            <li><Button onClick = {onAdd} text={showAddTicker ? "-" : "+"} /></li>
            <li>Ticker</li>
            <li>Quantity</li>
            <li>Buy Price</li>
            <li>Current Price</li>
            <li>Value</li>
            <li>Today</li>
        </ul>
    )
}

export default Navbar
