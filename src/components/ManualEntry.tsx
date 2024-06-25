/* Purpose: Display manual bill entry method
 * Params: None
 * Errors: TODO
 */
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ReceiptList from "./ReceiptList";

// type for items without id field (pre-database entry)
export type Item = {
  name: string,
  quantity: number,
  price: number,
}


export default function ManualEntry() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [store, setStore] = useState('');
  const addItem = ((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const itemPrice = +price;
    const itemQuantity = +quantity;
    setItems([...items, {name: name, quantity: itemQuantity, price: itemPrice}])
  })
  const addBill = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBill = {store, items}
    try {
      const response = await fetch (
        'http://localhost:4000/api/bills/',
        {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBill)
        }
      )
      if (response.ok) {
        setName('');
        setQuantity('');
        setPrice('');
        setItems([]);
        setStore('');
      } else {
        const errorJson = await response.json();
        throw new Error(`Error: ${response.status} ${response.statusText} - ${errorJson['error']}`);
      }
    } catch (error) {
      console.error("Error occured posting bill: ", error)
    }
  }
  return (
    <div className={"manual-entry"}>
      <form className='store-name-form' onSubmit={addBill}>
        <div className="store-name-wrapper">
          <input
            type="text"
            name="store"
            placeholder='Store Name'
            required
            value={ store }
            onChange={(e) => {setStore(e.target.value)}}
          />
        </div>
        <div className="submit-bill-button-container">
          <button className="submit-bill-button" type='submit'>
            <h3>Add Bill</h3>
          </button>
        </div>
      </form>
      <form className='input-form' onSubmit={addItem} >
        <label className='item-name'>
          Item:
          <input
            type="text"
            name="name"
            placeholder='Item Name'
            required
            value={ name }
            maxLength={18}
            onChange={(e) => {setName(e.target.value)}}/>
        </label>
        <label className='item-qty'>
          Quantity:
          <input
            type="number"
            name="qty"
            required
            value={ quantity }
            placeholder='0'
            min={0}
            onChange={(e) => {setQuantity(e.target.value)}} />
        </label>
        <label className='item-price'>
          Total Cost:
          <input
            type="float"
            name="price"
            required
            value={ price }
            placeholder='0.00'
            min={0.00}
            pattern="[0-9]+([\.,][0-9]{0,2})?"
            step="0.01"
            onChange={(e) => {
              const re = /[0-9]+([\.,][0-9]{0,2})?/;
              if (e.target.value === '' || re.test(e.target.value)) {
                setPrice(e.target.value);
              }
            }}
            onInput={e => (e.target as HTMLInputElement).setCustomValidity("")}
            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid dollar amount: (ex: 12.03)")}
          />
        </label>
        <button type='submit' className='add-btn'>
          <AddIcon />
        </button>
      </form>
      <ReceiptList items={items} form={true} />
    </div>
  )
}
