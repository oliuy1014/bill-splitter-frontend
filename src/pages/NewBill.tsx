import Navbar from '../components/Navbar'

const NewBill = () => {
  return (
    <>
    <Navbar />
    <div className="new-bill-container">
      <div className="manual-entry">
        <h3>Enter Manually:</h3>
        <form className='input-form'>
          <label className='item-name'>
            Item:
            <input type="text" name="name" />
          </label>
          <label className='item-qty'>
            Quantity:
            <input type="float" name="quantity" />
          </label>
          <label className='item-price'>
            Price:
            <input type="float" name="price" />
          </label>
          <input type="submit" value="Add Item" />
        </form>
      </div>
      <button className="curr">
        <h3>Take a photo</h3>
      </button>
    </div>
    </>
  )
}

export default NewBill