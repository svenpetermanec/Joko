import { useState } from 'react'

const AddTicker = ({onAdd}) => {
    const [instrument, setInstrument] = useState("")
    const [quantity, setQuantity] = useState("")
    const [buyPrice, setBuyPrice] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({instrument, quantity, buyPrice})

        setInstrument("")
        setQuantity("")
        setBuyPrice("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Instrument</label>
                <input type="text" placeholder="Add a instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Quantity</label>
                <input type="text" placeholder="Add the quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Buy Price</label>
                <input type="text" placeholder="Add the buy price" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)}/>
            </div>

            <input type="submit" value="Add a instrument"></input>
        </form>
    )
}

export default AddTicker
