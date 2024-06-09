import { useState } from 'react';
import Footer from '../components/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Item = {
  name: string,
  quantity: number,
  price: number,
}

const NewBill = () => {

  const [manualEntry, setManualEntry] = useState(false);
  const [photoEntry, setPhotoEntry] = useState(false);
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
    <>
    <Footer />
    <div className="new-bill-container">
      <div className="header">
        <h3>ADD NEW RECEIPT</h3>
      </div>
      <div className={`entry-options ${(manualEntry || photoEntry) && "disabled"}`}>
      <button
        className="receipt-entry"
        onClick={() => {
          setManualEntry(true)
          }}
      >
        Enter Manually
      </button>
      <button
        className="receipt-entry"
        onClick={() => {
          setPhotoEntry(true)
          }}
      >
        Take a Photo
      </button>
      </div>
      <button 
        className={`back-button ${(!manualEntry && !photoEntry) && "disabled"}`}
        onClick={() => {
          setManualEntry(false);
          setPhotoEntry(false);
        }}
      >
        <ArrowBackIcon />
      </button>
      <div className={`manual-entry ${!manualEntry && "disabled"}`}>
        <form className='shop-name-form' onSubmit={addBill}>
          <label className='store'>
            Store name:
            <input
              type="text"
              name="store"
              required
              value={ store }
              onChange={(e) => {setStore(e.target.value)}}
            />
          </label>
        <button type='submit'>
          Add Bill
        </button>
        </form>
        <div className="items-table">
          {items.map((item, index) => {
            const formatting_options = {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }
            const dollarString = new Intl.NumberFormat("en-US", formatting_options);
            const priceString = dollarString.format(item.price)
            return (
              <p key={index} className="item-name">
                {item.name} ({item.quantity}) {priceString}
              </p>
            )}
          )}
        </div>
        <form className='input-form' onSubmit={addItem} >
          <label className='item-name'>
            Item:
            <input
              type="text"
              name="name"
              placeholder='Enter Item Name'
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
          <button>
            Add Item
          </button>
        </form>
      </div>
      <div className={`photo-entry ${!photoEntry && "disabled"}`}>
        <p>Photo entry chosen!</p>
      </div>
    </div>
    </>
  )
}

export default NewBill